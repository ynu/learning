# Write Operation Performance

## Indexes

After every insert, update, or delete operation, MongoDB must update every index associated with the collection in addition to the data itself. Therefore, every index on a collection adds some amount of overhead for the performance of write operations. [1]

In general, the performance gains that indexes provide for read operations are worth the insertion penalty. However, in order to optimize write performance when possible, be careful when creating new indexes and evaluate the existing indexes to ensure that your queries actually use these indexes.

For indexes and queries, see Query Optimization. For more information on indexes, see Indexes and Indexing Strategies.

[1]	For inserts and updates to un-indexed fields, the overhead for sparse indexes is less than for non-sparse indexes. Also for non-sparse indexes, updates that do not change the record size have less indexing overhead.

## Document Growth

If an update operation causes a document to exceed the currently allocated record size, MongoDB relocates the document on disk with enough contiguous space to hold the document. These relocations take longer than in-place updates, particularly if the collection has indexes. If a collection has indexes, MongoDB must update all index entries. Thus, for a collection with many indexes, the move will impact the write throughput.

Some update operations, such as the $inc operation, do not cause an increase in document size. For these update operations, MongoDB can apply the updates in-place. Other update operations, such as the $push operation, change the size of the document.

In-place-updates are significantly more efficient than updates that cause document growth. When possible, use data models that minimize the need for document growth.

See Storage for more information.

## Storage Performance

### Hardware
The capability of the storage system creates some important physical limits for the performance of MongoDB’s write operations. Many unique factors related to the storage system of the drive affect write performance, including random access patterns, disk caches, disk readahead and RAID configurations.

Solid state drives (SSDs) can outperform spinning hard disks (HDDs) by 100 times or more for random workloads.

SEE
Production Notes for recommendations regarding additional hardware and configuration options.

### Journaling

MongoDB uses write ahead logging to an on-disk journal to guarantee write operation durability and to provide crash resiliency. Before applying a change to the data files, MongoDB writes the change operation to the journal.

While the durability assurance provided by the journal typically outweigh the performance costs of the additional write operations, consider the following interactions between the journal and performance:

if the journal and the data file reside on the same block device, the data files and the journal may have to contend for a finite number of available write operations. Moving the journal to a separate device may increase the capacity for write operations.
if applications specify write concern that includes journaled, mongod will decrease the duration between journal commits, which can increases the overall write load.
the duration between journal commits is configurable using the commitIntervalMs run-time option. Decreasing the period between journal commits will increase the number of write operations, which can limit MongoDB’s capacity for write operations. Increasing the amount of time between commits may decrease the total number of write operation, but also increases the chance that the journal will not record a write operation in the event of a failure.
For additional information on journaling, see Journaling Mechanics.
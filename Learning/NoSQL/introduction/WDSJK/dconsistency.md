#一致性
为了在MongoDB数据库中确保“一致性”，可以配置“副本集”，也可以规定写入操作必须等待所写数据复制到全部或是给定数量的从节点之后，才能返回。每次写入数据时，都可以指定写入操作返回之前，必须将所写数据传播到多少个服务器节点上。

可用类似db.runCommand({getlasterror: 1, w: "majority"})这样的命令指定数据库的“一致性”强度。

>这里的w:"majority"是说：在只有一台服务器时如果指定w为majority，那么写入操作就会立即停止，因为总共只有一个节点；若“副本集”中有三个节点，那么写入操作必须至少在两个节点上执行完毕才会视为成功。所以提高w值，可增“一致性”强度，但写入操作效率会降低。
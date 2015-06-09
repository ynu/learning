#####执行git rm命令删除文件

在本地删除之后，执行git status可以看到删除的文件是列出来的，我们可以将他们（假设为1.txt、2.txt、3.txt)全部删除，执行以下命令：

```$ git rm 1.txt 2.txt 3.txt```

这个时候删除动作已经加入了暂存区，这时需要提交动作，就是真正意义上的文件删除了。

```$ git commit -m "delete trash files.(using:git rm)"```

删除之后不用担心，因为文件只是在版本库的最新提交中被删除了，在历史提交中尚在。可以通过下面的命令查看历史版本中尚在的删除文件列表。

```$ git ls-files --with-tree=HEAD^```

```$ git cat-files -p HEAD^:1.txt```
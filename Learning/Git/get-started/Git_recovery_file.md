####恢复删除的文件
删除了文件之后，现在我们需要恢复删除掉的某个文件1.txt。由于我们删除的只是最新一次提交的文件，所以历史提交中的文件仍然保留，可以从历史提交中提取文件。

```$ git cat-file -p HEAD~1:1.txt > 1.txt```

这里也可以用git show来取代git cat-file -p命令，效果相同。

```$ git show HEAD~1:1.txt > 1.txt```

使用git checkout命令则为最简洁实用。

```$ git checkout HEAD~1 -- 1.txt```

注：这里的HEAD^与HEAD~1都指的是HEAD的上一次提交。

下面是将恢复过来的1.txt文件添加回暂存区。

```$ git add -A```

```$ git status -s```

```$ git commit -m "restore file:1.txt"```
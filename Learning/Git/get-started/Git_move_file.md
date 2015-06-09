####移动文件
通过将1.txt改名为README文件来测试一下在Git中如何移动文件。Git提供了git mv命令来完成改名操作。

```$ git mv 1.txt README```

可以从当前状态中看到改名的操作。

```$ git status```

提交改名操作。

```$ git commit -m "改名测试"```

所谓的改名就是对旧文件的删除，和对新文件的添加，所以可以用删除和添加来操作。

* 撤销之前测试文件移动的提交。

```$ git reset --hard HEAD^```

* 撤销之后1.txt文件又回来了。

```$ git status -s```

```$ git ls-file```

新的改名操作不使用git mv命令，而是直接在本地改名（文件移动），将1.txt改名为README。

```$ mv 1.txt README```

```$ git status -s```

为了考验一下Git的内容追踪能力，再修改一下改名后的README文件，即在文件末尾追加一行。

```$ echo "Bye-Bye." >> README```

可以使用前面介绍的git add -A命令。相当于对修改文件执行git add，对删除文件执行git rm，对本地新增文件执行git add。

```$ git add -A```

查看状态，也可以看到文件重命名。

```$ git status```

执行提交。

```$ git commit -m "README is from 1.txt."```

此次的重命名相似度将不再是100%。

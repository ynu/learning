#删除文件
看看版本库当前的状态，暂存区和工作区都包含修改。

```$ git status -s```

* 保存进度。
	
```$ git stash```

* 再恢复进度。因为这个保存的进度要被多次用到，所以这里不用git stash pop
	
```$ git stash apply```

* [本地删除不是真正的删除](../get-started/Git_local_delete.md)
* [执行git rm命令删除文件](../get-started/Git_gitrm_delete.md)
* [命令git add -u快速标记删除](../get-started/Git_gitadd-u_delete.md)
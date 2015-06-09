###Git的基础操作
####留影
在Git里“留影”用的命令叫做tag，更加专业的术语叫做“里程碑”（打tag，或打标签）。“留影”操作如下：

```$ cd/path/to/my/workspace/demo```

```$ git tag -m "say bye-bye to all previous practice."old_practice```

```$ls .git/refs/tags/old_practice```

```$ git rev-parse refs/tags/old_practice```

留影过后可以执行```git describe```命令将最新提交显示为一个易记的名称。显示的时候回选取离该提交最近的里程碑作为“基础版本号”
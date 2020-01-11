# php学习笔记
## 基本语法
``` php
  <?php
    echo 'hello wordl'
  ?>
```
## 变量
php的变量要用$来声明
```php
  <?php
    $a = 'php';
    echo $a;
  ?>
```
用isset()方法判断变量是否声明
```php
<?php
  if（isset($b)）{
    echo $b;
  } else {
    echo '未声明$b';
  }
?>
```

## 函数
```php
  $a = 1;
  function test1(){
    echo $a;
  };
  test1() // 报错，不可直接引用外部变量
  function test2(){
    global $a; // 需要global声明
    echo $a;
  }
  test2()
```
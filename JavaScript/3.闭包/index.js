/**
 * ? 什么是闭包
 * * 闭包是一个可以访问外部作用域的内部函数
 * ? 使用的场景
 * 
 * ? 优缺点
 * 
 * !Timer
 * !变量将一直存活着直到定时器的回调执行或者 clearTimeout() 被调用。 如果这里使用的是 setInterval() ，那么变量将一直存活到 clearInterval() 被调用。
 * 
 * !Event
 * !当变量在事件处理函数中被使用时，它将一直存活直到该事件处理函数被移除。
 * 
 * !request
 * !变量将一直存活到接收到后端返回结果，回调函数被执行。
 * 
 * ! 闭包只存储外部变量的引用，而不会拷贝这些外部变量的值
 */
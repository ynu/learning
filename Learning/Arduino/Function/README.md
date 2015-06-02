#Ardunio主要函数简介

- **输入输出函数**


pinMode(pin, mode)
 
将数位脚位(digital pin)指定为输入或输出。
 
范例 :
 
`pinMode(7,INPUT); // 将脚位 7 设定为输入模式`
 
digitalWrite(pin, value)
 
将数位脚位指定为开或关。脚位必须先透过pinMode明示为输入或输出模式digitalWrite才能生效。
 
范例 :
 
`digitalWrite(8,HIGH); //将脚位 8设定输出高电位`
 
int digitalRead(pin)
 
将输入脚位的值读出，当感测到脚位处于高电位时时回传HIGH，否则回传LOW。
 
范例 :
 
`val = digitalRead(7); // 读出脚位 7 的值并指定给 val`
 
int analogRead(pin)
 
读出类比脚位的电压并回传一个 0到1023 的数值表示相对应的0到5的电压值。
 
范例 :
 
`val = analogRead(0); //读出类比脚位 0 的值并指定给 val变数`
 
analogWrite(pin, value)
 
改变PWM脚位的输出电压值，脚位通常会在3、5、6、9、10与11。Value变数范围0-255，例如：输出电压2.5伏特（V），该值大约是128。
 
范例 :
 
`analogWrite(9,128); // 输出电压约2.5伏特（V）`
 
unsigned long pulseIn(pin, value)
 
设定读取脚位状态的持续时间，例如使用红外线、加速度感测器测得某一项数值时，在时间单位内不会改变状态。
 
范例 :
 
`time = pulsein(7,HIGH); // 设定脚位7的状态在时间单位内保持为HIGH`
 
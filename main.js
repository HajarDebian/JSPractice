//Problem 1
// var number=null;
// number=window.prompt("Enter a Number");
// window.alert(number);

//Problem 2
// var dividable=null;
// dividable=window.prompt("Enter a Number");
// if(dividable%3==0 && dividable%4==0)
// {
//     window.alert("Yes");
// }
// else
// {
//     window.alert("No");
// }

//Problem 3
// var num1=null;
// var num2=null;
// num1=window.prompt("Enter the First Number");
// num2=window.prompt("Enter the Second Number");
// if(num1>num2)
// {
//     window.alert(num1);
// }
// else if(num2>num1)
// {
//     window.alert(num2);
// }

//Problem 4
// var num=null;
// num=window.prompt("Enter a Number");
// if(num<0)
// {
//     window.alert("Negative");
// }
// else if(num>0)
// {
//     window.alert("Positive");
// }
// else
// {
//     window.alert("Equals Zero");
// }

//Problem 5
// var num1=null;
// var num2=null;
// var num3=null;
// num1=window.prompt("Enter your First Number");
// num2=window.prompt("Enter your Second Number");
// num3=window.prompt("Enter your Third Number");
// var max=0;
// var min=0;
// if (num1<num2 && num1<num3){
//     min=num1;
//     window.alert("min element ="+num1);
// }
// else if (num2<num1 && num2<num3){
//     min=num2;
//     window.alert("min element ="+num2);
// }
// else
// {
//     min=num3;
//     window.alert("min element ="+num3);
// }
// if (num1>num2 && num1>num3){
//     max=num1;
//     window.alert("max element ="+num1);
// }
// else if (num2>num1 && num2>num3){
//     max=num2;
//     window.alert("max element ="+num2);
// }
// else
// {
//     max=num3;
//     window.alert("max element ="+num3);
// }

//Problem 6
// var number=null;
// number=window.prompt("Enter your Number");
// if(number%2==0)
// {
//     window.alert("Even");
// }
// else
// {
//     window.alert("Odd");
// }

//Problem 7
// var character="";
// character=window.prompt("Enter a Character");
// if(character=='a'||character=='e'||character=='i'||character=='o'||character=='u')
// {
//     window.alert("Vowel");
// }
// else
// {
//     window.alert("Consonant");
// }

//Problem 8
// var fnum=null;
// fnum=window.prompt("Enter you Number");
// for(var i=1; i<=fnum; i++)
// {
//     console.log(i);
// }

//Problem 9
// var num=null;
// num=window.prompt("Enter a Number");
// for(var i=1; i<=12; i++)
// {
//     var result;
//     result= num*i;
//     console.log(result);
// }

//Problem 10
// var fnum=null;
// fnum=window.prompt("Enter you Number");
// for(var i=1; i<=fnum; i++)
// {
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Problem 11
// var num=2;
// var power=3;
// var result=1;
// num=window.prompt("Enter a Number");
// power=window.prompt("Enter the power number");
// for(var i=1; i<=power; i++)
// {
//     result*=num;
// }
// window.alert(result);

//Problem 12
// var num1=null;
// var num2=null;
// var num3=null;
// var num4=null;
// var num5=null;
// window.alert("Enter the marks of five subjects: ");
// num1=window.prompt("Enter the First subject's marks");
// num2=window.prompt("Enter the Second subject's marks");
// num3=window.prompt("Enter the Third subject's marks");
// num4=window.prompt("Enter the Forth subject's marks");
// num5=window.prompt("Enter the Fifth subject's marks");
// var sub1=parseInt(num1);
// var sub2=parseInt(num2);
// var sub3=parseInt(num3);
// var sub4=parseInt(num4);
// var sub5=parseInt(num5);
// var sum;
// sum=sub1+sub2+sub3+sub4+sub5;
// var avg;
// avg=sum/5;
// var per;
// per=avg+'%';
// window.alert("Total Marks= "+ sum);
// window.alert("Average Marks= "+ avg);
// window.alert("Percentage= "+per);

//Problem 13
// var month=null;
// month=window.prompt("Enter a Month's nuumber");
// if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
// {
//     window.alert("Days in Month: "+30);
// }
// else if(month==2){
//     window.alert("Days in Month: "+28);
// }
// else if(month==4||month==6||month==9||month==11)
// {
//     window.alert("Days in Month: "+31);
// }

//Problem 14
// var Physics=null;
// var Chemistry=null;
// var Biology=null;
// var Mathematics=null;
// var Computer=null;
// window.alert("Enter the marks of five subjects: ");
// Physics=window.prompt("Enter the Physics marks");
// Chemistry=window.prompt("Enter the Chemistry marks");
// Biology=window.prompt("Enter the Biology marks");
// Mathematics=window.prompt("Enter the Mathematics marks");
// Computer=window.prompt("Enter the Computer marks");
// var sub1=parseInt(Physics);
// var sub2=parseInt(Chemistry);
// var sub3=parseInt(Biology);
// var sub4=parseInt(Mathematics);
// var sub5=parseInt(Computer);
// var sum;
// sum=sub1+sub2+sub3+sub4+sub5;
// var avg;
// avg=sum/5;
// var per;
// per=avg+'%';
// var grade;
// if(avg>=90){
//     grade='A';
// }
// else if(avg>=80)
// {
//     grade='B';
// }
// else if(avg>=70)
// {
//     grade='C';
// }
// else if(avg>=60)
// {
//     grade='D';
// }
// else if(avg>=40)
// {
//     grade='E';
// }
// else if(avg<40)
// {
//     grade='F';
// }
// window.alert("Percentage= "+per+"   Grade= "+grade);

//Problem 15
// var month=null;
// month=window.prompt("Enter a Month's nuumber");
// switch(month)
// {
//     case '1':
//         window.alert("Days in Month: "+30);
//         break;
//     case '2':
//         window.alert("Days in Month: "+28);
//         break;
//     case '3':
//         window.alert("Days in Month: "+30);
//         break;
//     case '4':
//         window.alert("Days in Month: "+31);
//         break;
//     case '5':
//         window.alert("Days in Month: "+30);
//         break;
//     case '6':
//         window.alert("Days in Month: "+31);
//         break;
//     case '7':
//         window.alert("Days in Month: "+30);
//         break;
//     case '8':
//         window.alert("Days 
//         break;
//     case '9':
//         window.alert("Days in Month: "+31);
//         break;
//     case '10':
//         window.alert("Days in Month: "+30);
//         break;
//     case '11':
//         window.alert("Days in Month: "+31);
//         break;
//     case '12':
//         window.alert("Days in Month: "+30);
//         break;
//     default:
//         window.alert("Unavailable Choices");
// }

//Problem 16
// var character="";
// character=window.prompt("Enter a Character");
// switch(character)
// {
//     case 'a':
//         window.alert("Vowel");
//         break;
//     case 'e':
//         window.alert("Vowel");
//         break;
//     case 'i':
//         window.alert("Vowel");
//         break;
//     case 'o':
//         window.alert("Vowel");
//         break;
//     case 'u':
//         window.alert("Vowel");
//         break;
//     default:
//         window.alert("Consonant");
// }

//Problem 17
// var num1=null;
// var num2=null;
// num1=window.prompt("Enter the First Number");
// num2=window.prompt("Enter the Second Number");
// switch(true)
// {
//     case num1>num2:
//         window.alert(num1);    
//         break;
//     case num2>num1:
//         window.alert(num2);
//         break;
//     default:
//         window.alert("Error Happened");
// }

//Problem 18
// var number=null;
// number=window.prompt("Enter your Number");
// switch(true)
// {
//     case number%2==0:
//         window.alert("Even");
//         break;
//     case number%2!==0:
//         window.alert("Odd");
//         break;
//     default:
//         window.alert("Error Happened");
// }

//Problem 19
// var num=null;
// num=window.prompt("Enter a Number");
// switch(true)
// {
//     case num<0:
//         window.alert("Negative");
//         break;
//     case num>0:
//         window.alert("Positive");
//         break;
//     case num=0:
//         window.alert("Equals Zero");
//         break;
//     default:
//         window.alert("Error Happened");
// }

//Problem 20
// var oprand1=null;
// var oprand2= null;
// var operation='';
// oprand1=window.prompt("Enter the First Oprand");
// oprand2=window.prompt("Enter the Second Oprand");
// var num1;
// num1=parseInt(oprand1);
// var num2;
// num2=parseInt(oprand2);
// operation=window.prompt("Enter the Operation you want to Perform");
// var result;
// switch(operation)
// {
//     case '+':
//         result=num1+num2;
//         window.alert(result);
//         break;
//     case '-':
//         result=oprand1-oprand2;
//         window.alert(result);
//         break;
//     case '*':
//         result=oprand1*oprand2;
//         window.alert(result);
//         break;
//     case '/':
//         result=oprand1/oprand2;
//         window.alert(result);
//         break;
//     default:
//         window.alert("Error Haappened");
// }
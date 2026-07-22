TINY URL         FUNCTIONAL        AND          NON FUNCTIONAL REQUIREMENTS

                1.                             1. UNIQUE URL 
                                               2. HIGHLY AVAILABLE
                                               3. LOW LATENCY (redirection and converting of urls)
                                               4. 









THE RATIO OF REDIRECTING AND CRATING A LINKE 
 LETS SAY ::
                    
                        100:1


LETS ASSUME 1 DAY->>> '10' MILLION LNKS CREATED

FOR 100 YEARS   10M * 100 *365  == 365 B

allow a-z  -26
also allow A-Z  - 26
so also use 0-9  -10
total ------      62.

if we need a four combination of alphabets  then _* _* _*_    26*26*26*26
then _* _* _*_    62*62*62*62.........

62^x=365 Billion    x=?

x=7 the code should be of 7 digits.



------MD5 HASH-----



# CONVERTING TO BASE 62

Number is  24327

BASE IS 62, SO  24327/62       QUOTIENT=392  REMAINDER= 23
 NOW AGAIN      392/60         QUOTIENT=6    REMAINDER= 20
    AGAIN,      6/60           QUOTIENT=0    REMIANDER=6

GO UPWARDS IN REMAINDER

THE LINING IS 
0-9       6->6    20->K   23->N
A-Z      
a-z

So  6 K N
 AGAIN CONVERTING (23)*62^0+ (20)*62^1+6*62^2  =24327

 ***[PADDING SUCH AS 00006KN]***


 IF THERE ARE MORE THAN ONE SERVER WITH LETS SAY FIRST SERVER STARTS FROM A COUNT=0 AND SECOND FROM 5M   BUT AFTER 5M IS EXHAUSETED THE SECOND SERVER WILL ALSO GIVE SAME CODE AS FIRST ONE.  SO WE USE A CENTRALIZED SERVER WHICH HAS A COUNT AND COMMUNICATES TO EACH SERVER AND AS NEW SEVRVICE IS REQUESTED IT GIVES INSTRUCTION TO ALL ERVERS TO COUNT++;

 DISADVANTAGE IS THAT IF CENTRAIZED GETS DOWN ALL SERVER DOWN.
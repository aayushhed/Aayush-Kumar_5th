**[MONOLITHIC ARCHITECTURE]**

     ADVANTAGES                            DISADVANTAGES
        1.EASY IMPLEMENT                         1. SINGLE POINT OF FAULURE
        2. LOW LATENCY                           2. NOT SCALABLE
        3. EASY INTEGRTION TESTING               3. UNIT TESTING IS NOT POSSIBLE
        4. EASY DEPLOY                           4. HARD MAINTAINACE
        5. COST EFFCTIVE                         5. REDEPLYOMENT REQUIRED


*[KEY_EXPECTATIONS]*

1.LOOSE COUPLING [DEPENDENCY LOW]
2.INEDEPENDENTT TESTING, CODE AND DEPLOY
3.INDEPENDENT SCALE OF THE SERVER

**[DDD-DOMAIN DRIVEN DESIGN]**

-------> FOCUSES ON MODELING SOFTWARE AROUND THE REAL-WORLD BUSINESS DOMAIN.

DDD IS A SOFTWARE DEVELOPMENT APPROACH THAT DESIGNS SOFTWARE BASED ON THE BUSINESS DOMAIN RATHER THAN DATABASES OR TECHNOLOGY.

--------------*[IN A MESSAGING APP]*------------------


 NOTE ALL THE EVENTS THAT ARE POSSIBLE:
                                1.MESSAGE SENT
                                2.MESSAGE RECIEVE
                                3.LOGIN
                                4.LOGOUT
                                5.SIGN UP   



                        DELETE       DELETE
                           |            |
    SIGNUP-->LOGIN-->MESSAGE SENT-->RECIEVE-->LOGOUT
               |                                |
               |--------------------------------|



**[BOUNDED CONTEXT]**
         A BOUNDED CONTEXT IS A CLEAR BOUNDARY WITHIN A SYSTEM WHERE A SPECIFIC BUSINESS MODEL, RULES, AND TERMINOLOGY ARE VALID.

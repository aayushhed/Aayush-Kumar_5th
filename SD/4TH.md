------[BACK OF THE ENVELOPE]----------
 
          TRAFFIC                        STORAGE

        10^3(users)                       kb(kilobyte)
        10^6                              mb                 
        10^9                              gb
        10^12                             tb
        10^15                             pb
        
[IF 15 MILLION USERS HAVE 8 mb THEN TOTAL STORAGE ] 

        (15*10^6) * (8*10^6)

                                              {ROUND OF THE NUBERS TO THE NEAREST 100 OR 1000 FOR EASE OF CALCULATION}


LET AN APPLICATION FACBOOK WHERE YOU CAN UPLOAD A TEXT AND IMAGE ONLY:
char ->2byte            (1 byte= 8bits.)
long/double  -> 8byte
image-> 300kb

THEN 
     server->?
     data storage->?
     RAM->?

LET USER== 1 BILLION   (active and inactive)

    DAILY ACTIVE USERS -- 250 MILLION

    1 USER-> 48 (read) + 2 POST(write)        [request]

    TOTAL REQUEST->50

HOW MUCH OF SERVER IS NEEDED:

    TOTAL NUMBER OF REQUEST DAILY BY ALL USERS  = (50*250M)  == 12500 M == 12.5 B

    REQUEST/SEC(in a day )=  12.5 B/(24*60*60) ===125 k request/sec.   (alwways a upper bound is taken for rounding off)

    CAPACITY OF A SINGLE SERVER TO HANDLE REQUEST PER SEC----> 100 threads

    AND LATENCY  ->>> 500ms   (2 threads in one sec)

    THEN CAPACIITY OF A SINGLE SERVER=  200 per sec


    125k/200 =625 SERVERS NEEDED

HOW MUCH OF DATA STORAGE IS NEEDED: 

    1 USER-> 2 POST(250 char)
    bytes=250*2=500bytes.

    2 POST=500*2=1kb.

    TOTAL USERS =250 M * 1kb = (250*10^6) * (1*10^3) == 250 gb

    LETS SAY FOR 7 YEARS---->>>

    FOR ONE DAY WE NEED == 250 gb
     FOR SEVEN YEARS ==  250  gb * (7*365)   (round off always)
                     == {750 tb}

    LET ALL USER POST 25 M  POST DAILY
            25 M * 300kb == 8 tb  (daily)   (round off)
    
    LET SAY FOR  7 YEARS   8tb * (7*365) == {24 pb}



    TOTAL STORAGE NEEDED = 24pb + 750 tb == 25 pb.


HOW MUCH OF A CACHE MEMORY IS NEEDED:

    IF WE NEED TO STORE 10 POST IN CACHE FOR A SINGLE USER-->
     1 USER->> 10* 300bytes  == 5 kb;

     FOR ALL USERS ->> 250 M * 5 kb ===  1.5 tb

RESULTING :
              no.of servers-> 625 servers
               data storage-> 25 pb
                RAM -> 1.5 tb




     

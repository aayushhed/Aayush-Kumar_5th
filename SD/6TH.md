# Creating a unique url

When long url is put into the table  its index is taken for base 62.


                   | short url  |        Long             |
                                  365 B links (5th.md)


            
                    
So storing this is a complex thing so divide database into 1000 small data bases giving:
 365B/1000;

#ARCHITECTURE:

[USER]
   |
   v
[API GATEWAY]
   |
   v
[LOAD BALANCER]
   |
   v
[APPLICATION SERVERS]
   |-------------------------------|
   |                               |
1. Short URL Creation          2. Redirection
   |                               |
   v                               v
[DATABASE]                     [DATABASE]
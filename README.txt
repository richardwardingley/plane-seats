Plane seat booking...
assuming a plane where each row of seats has three banks;
Bank 1 has three seats,
Bank 2 has four seats,
Bank 3 has three seats,
With an aisle between bank 1 and bank 2, and an aisle between bank 2 and bank 3

e.g.
Row. Seats.
1 -  ABC  DEFG  HIJ
2 -  ABC  DEFG  HIJ
3 -  ABC  DEFG  HIJ
4 -  ABC  DEFG  HIJ
5 -  ABC  DEFG  HIJ
6 -  ABC  DEFG  HIJ
7 -  ABC  DEFG  HIJ
8 -  ABC  DEFG  HIJ
...

Seats in each row are referenced by the corresponding letters.

You need to book a family of 3 people onto the plane;
- all family members must be on the same row
- All family members must be in adjacent seats
- Family members cannot be split by an aisle

write a function that takes a list of seat bookings and the number rows in the plane and outputs the total number of spaces on the plane that could accommodate the family of three.

spaces (bookings, rows);

bookings = a string containing references to all the booked seats on the plane space separated. e.g. '1A 5B 23H 18F...'
rows = the total number of rows of seats in the plane.

Example...
spaces('1B 1D 1H 1J 2C 2D 2E 2F', 2) would return 2
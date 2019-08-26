INPUT nama
INPUT nilai
IF nilai <= 100 && <= 80
  DISPLAY nilai A
ELSE IF nilai <=79 && nilai <= 65
  DISPLAY nilai B
ELSE IF nilai <=64 && nilai <= 50
  DISPLAY nilai C
ELSE IF nilai <=49 && nilai <= 35
  DISPLAY nilai D
ELSE IF nilai <= 0 && nilai <= 34
  DISPLAY nilai E
ELSE IF nilai < 0 || >100
 DISPLAY Nilai Invalid
END IF
OUTPUT nama
OUTPUT nilai

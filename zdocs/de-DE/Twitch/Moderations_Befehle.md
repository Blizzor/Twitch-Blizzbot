# Moderation - Befehle für den Twitchchatbot

## **Commands hinzufügen/editieren/löschen**

### Hinzufügen eines neuen Commands.<br>

```
!add !(Befehlsname) (Text)  
    z.B !add !test Das ist ein Test
```
#### Ändern eines eingespeicherten Commands<br>

```
!edit !(Befehlsname) (Text)  
    z.B !edit !test Das ist ein neuer Text 
 ```     
#### Entfernen eines eingespeicherten Commands.<br>

```
!del !(Befehlsname)
    z.B !del !test
```
### Hinzufügen eines neuen internen Commands.<br>

```
!cadd !(Befehlsname) (Text)  
    z.B !cadd !test Das ist ein Test
```
#### Ändern eines eingespeicherten Commands<br>

```
!cedit !(Befehlsname) (Text)  
    z.B !cedit !test Das ist ein neuer Text 
 ```     
#### Entfernen eines eingespeicherten Commands.<br>

```
!cdel !(Befehlsname)
    z.B !cdel !test
```
## **Blacklist  hinzufügen/löschen**

#### Einfügen eines Worts zur Blacklist.<br>

```
!addbl (Wort)   
    z.B !addbl Test
```      
#### Entfernen eines eingespeicherten Worts von der Blacklist<br>

```
!delbl (Wort)
    z.B !delbl Test 
```      
#### Anzeigen lassen der Wörter auf der Blacklist, im ausgewählten DC Channel.<br>

```
!blacklist
```

## **Alias Funktion**

#### Fügt ein neuen Alias hinzu.<br>

```
!addalias (neuealias) (hauptcommand)
    z.B !addalias !testing !test
```
#### Entfernt einen Alias von der Command-List.<br>

```
!delalias (alias) (hauptcommand)
    z.B !delalias !testing !test 
```

## **Watchtime Funktion**

#### Zeigt die Zeit an wie lange jemand zuschaut.<br>

```
!uwtime (name)
    z.B !uwtime username
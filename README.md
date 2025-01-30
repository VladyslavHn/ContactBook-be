# Dokumentace Contact Book API

Toto je backend API pro správu kontaktů, postavené pomocí TypeScriptu a Express.js. Aplikace umožňuje uživatelům spravovat informace o kontaktech, jako je jméno, příjmení, e-mailové adresy, telefonní čísla a poštovní adresy.

API je nasazeno na platformě **Render** pro snadný přístup a testování.
Live API můžete vyzkoušet na následujícím odkazu: [https://contactbook-be.onrender.com](https://contactbook-be.onrender.com).

## API Endpoints

### 1. **GET /contacts**
Získat seznam všech kontaktů.

- **Odpověď**: 200 OK  
- **Tělo odpovědi**: JSON pole obsahující všechny kontakty.

### 2. **GET /contacts/:contactId**
Získat konkrétní kontakt podle ID.

- **Parametry URL**:
  - `contactId`: ID kontaktu, který chcete získat.
  
- **Odpověď**: 200 OK  
- **Tělo odpovědi**: JSON objekt obsahující informace o kontaktu.

### 3. **POST /contacts**
Vytvořit nový kontakt.

- **Tělo požadavku**: JSON objekt obsahující informace o kontaktu (jméno, příjmení, e-maily, atd.).

- **Odpověď**: 201 Created  
- **Tělo odpovědi**: JSON objekt obsahující informace o nově vytvořeném kontaktu.

### 4. **PATCH /contacts/:contactId**
Aktualizovat existující kontakt.

- **Parametry URL**:
  - `contactId`: ID kontaktu, který chcete aktualizovat.

- **Tělo požadavku**: JSON objekt obsahující pole, která chcete aktualizovat (jméno, příjmení, e-maily, atd.).

- **Odpověď**: 200 OK  
- **Tělo odpovědi**: JSON objekt obsahující aktualizované informace o kontaktu.

### 5. **DELETE /contacts/:contactId**
Smazat existující kontakt.

- **Parametry URL**:
  - `contactId`: ID kontaktu, který chcete smazat.

- **Odpověď**: 204 No Content  

## Validace

- Všechna pole jsou validována pomocí **Zod** pro TypeScript.
- Povinná pole zahrnují `firstName`, `lastName` a `emails`.
- E-mailové adresy musí být platné.
- Telefonní čísla a poštovní adresy jsou volitelné.

## Databáze

API používá **MongoDB Atlas** jako perzistentní databázi. Testovací data byla přidána pro snadné testování.

## Testování

- Jednotkové testy jsou napsány pomocí **Jest**.
- Testy pokrývají validaci, vytváření kontaktů, aktualizace a mazání.

## Chybové hlášky

- 400 Bad Request: Neplatný vstup nebo chybějící povinná pole.
- 404 Not Found: Zdroj nenalezen.
- 500 Internal Server Error: Neočekávaná chyba serveru.


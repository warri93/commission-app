// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {Headers} from "@angular/http";

export const environment = {
  production: false,
  COMMISSION_PUBLIC_MULE_URL: "http://localhost:1337/10.3.11.2:20000/public/",
  OHM_MASTERDATA_URL: "http://localhost:1337/10.3.11.2:20000/ohm-pcr1004-SNAPSHOT/servicecatalog/masterData/3_0/",
  HEADERS: new Headers({     'Content-Type': 'application/json',
    'X-ravago-version':'1.0',
    'X-ravago-userId':'RAV02102',
    'X-ravago-clientId':'Commission',
    'X-ravago-authenticationToken':'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsIng1dCI6IkpyMU0zOC15cDV3aGZrdTBEVEMyS1NJYTFtYyIsImtpZCI6Im9yYWtleSJ9.eyJ1aWQiOiJSQVYwMjEwMiIsIm1haWwiOiJiZXJ0Lmh1eWdlbnNAcmF2YWdvLmNvbS5kY2siLCJzdWIiOiJSQVYwMjEwMiIsInJhdmFnb3NlY3VyaXR5Z3JvdXBzIjoiQ29tbWlzc2lvbiBBY2NvdW50YW50LEJMVUUgQ1NSIiwib3JhY2xlLm9hdXRoLnVzZXJfb3JpZ2luX2lkX3R5cGUiOiJMREFQX1VJRCIsIm9yYWNsZS5vYXV0aC51c2VyX29yaWdpbl9pZCI6IlJBVjAyMTAyIiwiaXNzIjoid3d3Lm9yYWNsZS5leGFtcGxlLmNvbSIsImxhc3RuYW1lIjoiSHV5Z2VucyIsInJhdmFnb29obXVpZCI6ImJlcnRoIiwiZmlyc3RuYW1lIjoiQmVydCIsIm9yYWNsZS5vYXV0aC5zdmNfcF9uIjoiUmF2YWdvU2VydmljZVByb2ZpbGUiLCJpYXQiOjE0OTE4MzMzNDAsIm9yYWNsZS5vYXV0aC5wcm4uaWRfdHlwZSI6IkxEQVBfVUlEIiwib3JhY2xlLm9hdXRoLnRrX2NvbnRleHQiOiJyZXNvdXJjZV9hY2Nlc3NfdGsiLCJleHAiOjE0OTk2MzMzNDAsInBybiI6IlJBVjAyMTAyIiwianRpIjoiOTg1NjU4YTMtOWZlNi00MGZmLWFmYjAtZGQ2NThkZDliODJiIiwib3JhY2xlLm9hdXRoLnNjb3BlIjoiQ29tbWlzc2lvbi5JbmZvIEJsdWUuQXBwIE9obS5BcHAgT2htLkluZm8gQmx1ZS5JbmZvIENvbW1pc3Npb24uQXBwIFJhdmFnb1VzZXJQcm9maWxlLm1lIiwib3JhY2xlLm9hdXRoLmNsaWVudF9vcmlnaW5faWQiOiJjb21taXNzaW9uQnJvd3NlckNsaWVudCIsIm9yYWNsZS5vYXV0aC5pZF9kX2lkIjoiNmQyNTg2MWUtYzliOS00MGFlLWE3ZjEtMmE4NTFlOTM5NmVlIiwidXNlci50ZW5hbnQubmFtZSI6IlJhdmFnbyJ9.SLzm4WHLh3nrbK8Hu6ttj79et6WuAEaQqNAuYkS_qhTdFaKlQbRr60r98NkQ9HwOXfRlc7rtGd4gHjQu1wkHzwCyj6kwELp2tv-JDzFkSj-Q56Kmhsk_NvtVoFLClybOdPgahZBC7QTjgXG-MvNJDacPlVmvftAT6DJoPmDbTCs',
    'X-ravago-messageId':'f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
    'X-ravago-apiKey':'d856b282-cf8b-43be-8bac-4c29a6f4caf4'
  })
};

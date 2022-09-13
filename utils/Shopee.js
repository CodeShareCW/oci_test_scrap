const randUserAgent = require('rand-user-agent');

function domainMapping(country_code = 'TH') {
  switch (country_code) {
    case 'TH':
      return 'shopee.co.th';
    case 'ID':
      return 'shopee.co.id';
    case 'MY':
      return 'shopee.com.my';
    case 'PH':
      return 'shopee.ph';
    case 'VN':
      return 'shopee.vn';
    case 'SG':
      return 'shopee.sg';
    case 'TW':
      return 'shopee.tw';
    case 'BR':
      return 'shopee.com.br';
    case 'MX':
      return 'shopee.com.mx';
    case 'IN':
      return 'shopee.in';
    case 'AR':
      return 'shopee.com.ar';
    case 'CL':
      return 'shopee.cl';
    case 'ES':
      return 'shopee.es';
    case 'FR':
      return 'shopee.fr';
  }
}

function headerMapping(country_code, axios) {
  if (country_code == 'ID')
    axios.defaults.headers.common = {
      accept: 'application/json',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9',
      'af-ac-enc-dat':
        'AAYyLjIuMTEAAAGC7U/9JgAAAAACNQAAAAAAAAAASfVLWq/U2i/dhYyH7qLjwkjn/IElfRx/wV29r4/oWr7FRcEuf92fYDC2WMcdPOC9mmlMQ+JYTMHF6kF68iRD85aWYi9ro3Wl9b3oSySuEOrgGKGQQJ836vmwS4evtiSZF+8hpeeDkMDl0WXkPHJxWWKeZxKiANabELvIDF7mk6JeW0SodskjZYgfTMwqTQAxORAfNQyYnRvuLjFrGKuq5I2ito2sxFia2HJuXes21cGlWbp2zNOLAinKJTYNWdMPlO4he1cCn6IiRJ5ednxhV1l5mK+/3V46HeMIXbDEy4LOIOXoT1drQU/n7f2jEWhfka4X1yF1ovMMx7wxLqUnU3OHVeeJNvqYso4XqTBJlvEjgWfNNLiT5e1wPvI/KL071qusRgYcoNPUCDGEOP5MtFwmppA0O+UMDsiIm+kWyCl4dBfH6UQQJeUeSeahNPKP9WfV1wzIWyPSukCm47ot1hh9HRa+ATakkRRK8ipaUKBM+lIgoG5Yr4LSHN8Z7WjiIQcqDO9HJ2sizQOFCTVhwbXzKUOYil7HHJaV9RpGN+fkO1JQb1AhUtRIjdHz7ZWLeQaSJWAYfm+VPjbg8VS011v7wrWQMSK2YEBlGcmFfYWqdUTpJIsSzOe9qT/qkIkF79BZ40RmNOyZvsNG0E20OpFjs4yw8pGWNnYQjtmnppYIgCBO2189GFnjXOU2C7ObkWOzjLDykZY2dhCO2aemll6HD93oU4YN49soUonwwULIccg3Chbp8TsNVENmTLUK',
      'content-type': 'application/json',
      cookie:
        '_gcl_au=1.1.1249137045.1661767203; _fbp=fb.2.1661767203337.230583262; REC_T_ID=5ace3c02-2781-11ed-9f61-2cea7fa64d22; SPC_F=oLi6I2Qz8LFYbft054jX4wmm6hadBm65; _tt_enable_cookie=1; _ttp=7aafffe6-830a-4ef7-a0c0-efd3fad93c66; G_ENABLED_IDPS=google; SPC_IA=-1; SPC_CLIENTID=b0xpNkkyUXo4TEZZqrdhxkerlscvppgl; __LOCALE__null=ID; csrftoken=nRMIKqWy8DUu037tjdEYlUbKBG9TPBeG; _QPWSDCXHZQA=b210e066-474d-4b31-e5d6-6924f3bbbadc; _gid=GA1.3.1630899132.1662821488; AMP_TOKEN=$NOT_FOUND; _dc_gtm_UA-61904553-8=1; G_AUTHUSER_H=0; SPC_T_ID="s4jBwHSKgtl207QASmdKsx1qKxZmslePzwKCHZpxBE8Xv7gv2upreR/V5JP+PfRlEoCol/qixciSTCJsILvewVMeXG1h5QIFPpX3rD+A49g="; SPC_U=861521833; SPC_T_IV="0FAIL6q1zCJoO6PqgGIy0Q=="; SPC_T_ID=s4jBwHSKgtl207QASmdKsx1qKxZmslePzwKCHZpxBE8Xv7gv2upreR/V5JP+PfRlEoCol/qixciSTCJsILvewVMeXG1h5QIFPpX3rD+A49g=; SPC_T_IV=0FAIL6q1zCJoO6PqgGIy0Q==; SPC_ST=.bUtsa3R4OXZZcVNBOVAyUDFDRONhX93VLYW6YGD+JnZlD1LXBN1KPGbp+cm3Ee6/Htz6akBEm6QInubTpex2isySErS5hICYHhmgc6lZ69Yd5drALiyatI+7TBoeLo9ky3XwtrZw3EU2uuW8ANv5g9CKDlpZ8tGMYpaxcJTvZSjCv2cBWnZ0lGSBnVE8laeTlprLI9LGQzL+P7R/QzqtDw==; SPC_SI=5fwFYwAAAABUMGhOV3Ruc0VPjwEAAAAAVmN5a2dPek0=; SPC_R_T_ID=s4jBwHSKgtl207QASmdKsx1qKxZmslePzwKCHZpxBE8Xv7gv2upreR/V5JP+PfRlEoCol/qixciSTCJsILvewVMeXG1h5QIFPpX3rD+A49g=; SPC_R_T_IV=0FAIL6q1zCJoO6PqgGIy0Q==; _ga=GA1.1.411778289.1661767207; cto_bundle=KSuRyl9qcEJIVDZOUVh3WnhQV1hLRmZZa0NuVUl6bE5sOGtlV055dGpJR0VtMFp0UURLSzBoMkFUUDBub05uVzkzWjMyT0t2WWVjcjhOOCUyRnNHRGlla0dMRmp3YkY4aExNbmVxZklCd25CTld6THdiMHJ5V3pUeTY0ckpOSnd1M3NOdlhrMmdMbUNycTdoN2djbFN1U255dDM3QSUzRCUzRA; shopee_webUnique_ccd=hlLU0JS9J1zqqo3OND68aw==|wNjkitiAor0mEhSeKUsuRxqCzjf7vMMJS3amly8vyZXDeuDnDOxgNk9TUv6h8NuJckuNp3+37qpVWu9blgDL1Hc3|1X4vwIgO3KUSWYE3|05|3; ds=c4f6a506787311f1a7b1f080e433c132; _ga_SW6D8G0HXK=GS1.1.1662829429.12.1.1662829461.28.0.0; SPC_EC=R0M2bDNieHYyUU1YOHNRQf3gto+AyoismK+ooDVeT4gWSzwS0PJaVYCf8I7WC+7/c8CoRUpBVqDzlkTk8w3YoKt+q9mgA0XBqIiga6PK4Qqv88XxRkMfkGDqqWZwwsd2IaeYJyUWNlvZhNVU34blR3Dc6m9Oh57gjY1vzK3Kwqw=',
      host: 'shopee.co.id',
      referer: 'https://shopee.co.id/Fashion-Muslim-cat.11042684',
      'sec-ch-ua': `"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104`,
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'Windows',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'sz-token':
        'VMocbDTPM9N8ppRHKhy2+g==|e7qWtNFbUWjkjyh3IqJW/eOrSkunPj1UqqNZ7KcBhyB4lcUCF/j7lfZKLJZYTBxpFwHIUYAVIW13NRBYMAy3XdU=|CXKOcoCGIyuFT/b3|05|3',
      'x-api-source': 'pc',
      'x-csrftoken': 'raVkvUjq1vXtu6wmkNKFpg2snjB0xxTH',
      'x-requested-with': 'XMLHttpRequest',
      'x-sap-access-f':
        '3.0.0.2.0|13|2.2.11_5.1.0_0_109|f16c90faaf7d4746bb9f41103687055c09b169d494794a|10900|1100',
      'x-sap-access-s': 'Lj29wDbIFc3jtE89GOYzstdsrT3vPgnmMhPNHWLsuM4=',
      'x-sap-access-t': '1660535828',
      'x-shopee-language': 'id',
      'user-agent': randUserAgent('desktop', 'chrome', 'linux'),
    };
  else if (country_code == 'VN')
    axios.defaults.headers.common = {
      cookie:
        'SPC_F=JQNliAcYMIpYsHSUlKTsxTWMYKyE8bWr; REC_T_ID=924570a6-2766-11ed-bd60-2cea7fac8eb0; SPC_IA=-1; _gcl_au=1.1.1835721079.1661755701; _fbp=fb.1.1661755702126.1030887515; __LOCALE__null=VN; csrftoken=LTdmx7tpZGOb9mCajjuMD9zhwjiawv62; _QPWSDCXHZQA=f74d036a-d285-441c-dafe-be14769f5957; cto_bundle=3TBO4V8lMkZ3N2g1eUoxNSUyRnhxNm43NlBEcGt1Nmowa2NENUJZdkp5NUhVQlJKcXpnTlNZc09FaCUyRnBkd29yREVlTDdqNyUyQnJTemRrTHhuQ28lMkJwJTJGZWxwQXFuQUNTR0RmUHNrYVdjamc0VG5jdDdFd25CJTJGSHhZdGVGajVsOGNwSEVhc3VoTjJhVWZhSnZDT09vclVWMExvZ1B6NzJrUSUzRCUzRA; AMP_TOKEN=$NOT_FOUND; _gid=GA1.2.978618616.1662829340; _dc_gtm_UA-61914164-6=1; _hjSessionUser_868286=eyJpZCI6ImI5OTQ0ZmZhLTZlNGMtNTg1OC05Njg1LTA0MTQ0ZWFjMTVlZiIsImNyZWF0ZWQiOjE2NjE3NTU3MDQ5NTYsImV4aXN0aW5nIjp0cnVlfQ==; _hjIncludedInSessionSample=0; _hjSession_868286=eyJpZCI6IjZmMWQ2OWZmLTA1MDItNGFiNC1hOWRkLWQ0YmY2MmEwM2MyNCIsImNyZWF0ZWQiOjE2NjI4MjkzNDEyNzIsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; G_ENABLED_IDPS=google; SPC_ST=.RFFZb2NEUzhoZnV2aHNjNS2F1zL7DZipmsznsCyEr07Q1SVA662C5V+aOrSrSnHW7KAjS+f963pRA5bEQi/pEMtYWKK4xdj5Lsf3TQv7I6cZwa1w8hhZi8TVjxpIhaTNfRMjCmL2wm+YRUTYhrjKzo9ebgMgHKwcScjrnEnOcm/E7VO6YQIsZGoYGLItZNpDYXapopdwebHad9MuZsACYw==; SPC_CLIENTID=SlFObGlBY1lNSXBZocawizkrhoebwffi; SPC_U=861521264; SPC_T_ID="FwoZvCofB/5REf/Cg2yjGuk2UF2shvU7mBtsnQCa5t6aevgHDOgfndiF4YeQLkvSL6LKIF8gbYM6NEDpG72fJ8vvnw+z7OMn0zP545NTS/U="; SPC_T_IV="6AkiR2ZwitfFDQUSuVSQCg=="; SPC_T_ID=FwoZvCofB/5REf/Cg2yjGuk2UF2shvU7mBtsnQCa5t6aevgHDOgfndiF4YeQLkvSL6LKIF8gbYM6NEDpG72fJ8vvnw+z7OMn0zP545NTS/U=; SPC_T_IV=6AkiR2ZwitfFDQUSuVSQCg==; _ga=GA1.1.505941620.1661755704; _ga_M32T05RVZT=GS1.1.1662829339.2.1.1662829366.33.0.0; SPC_R_T_ID=FwoZvCofB/5REf/Cg2yjGuk2UF2shvU7mBtsnQCa5t6aevgHDOgfndiF4YeQLkvSL6LKIF8gbYM6NEDpG72fJ8vvnw+z7OMn0zP545NTS/U=; SPC_R_T_IV=6AkiR2ZwitfFDQUSuVSQCg==; SPC_SI=gaocYwAAAABTSHFBRzBWd6zyAAAAAAAAaXVGY3VWRlM=; SPC_EC=ZkV4NVI2NlZMZU41MFpXSV5klWhDdSyD2Qm6YovlHFiNBeGGnwf5+oFEDpHT5iFvtoSxrHAZY61QFg2o/WX3IeElXJJCFR4anwGZPsPtiGTs2pDR1buKQcnZfHY9+nW+BE33/lPvGB4fD5reYj5+uafN+HXxXD/b+OzRbQEiLto=; shopee_webUnique_ccd=8ttoVFoYN0C0IBR9iys/PA==|RHwkNBBbJ3uhGLlJVBFI07EQX0LqbMiIRhfV/oj5zIkYLc1QyWazRDpeCroKOStMSsAXc8ruO1bNxINYZdAqWt1W+A==|0zUDw+URlgsWmEdE|05|3; ds=a6fb58daeacca889eca3871fecb1cf80',
      'x-api-source': 'pc',
      'x-csrftoken': 'sdtkjv2XWDsSm9GkTqkhiz8YnhC5oPGi',
      'x-shopee-language': 'en',
      'user-agent': randUserAgent('desktop', 'chrome', 'linux'),
    };
  else if (country_code == 'MY') {
    axios.defaults.headers.common = {
      cookie:
        'REC_T_ID=30865b33-2373-11ed-b724-82f393dbb371; SPC_F=7yeKDeT1qNKJGh1aHF0C5IKbYOv4IA8P; _gcl_au=1.1.629528255.1661321317; _fbp=fb.2.1661321317614.1971003227; language=zhHans; G_ENABLED_IDPS=google; SPC_CLIENTID=N3llS0RlVDFxTktKxrxoprtjlmncxgii; _ga_KK6LLGGZNQ=GS1.1.1661938742.1.0.1661938742.0.0.0; _gcl_aw=GCL.1662297467.Cj0KCQjwmdGYBhDRARIsABmSEeP0gjBXBb91d_RR-hppV4Sra2qo-H86qHwtq0E8MQK_oaNZ1XEC-1MaAvd9EALw_wcB; _med=cpc; _gac_UA-61915055-6=1.1662297468.Cj0KCQjwmdGYBhDRARIsABmSEeP0gjBXBb91d_RR-hppV4Sra2qo-H86qHwtq0E8MQK_oaNZ1XEC-1MaAvd9EALw_wcB; SC_DFP=wXxHwPwqvagqZmqhulOymcbloHCMeWxQ; SPC_IA=-1; __LOCALE__null=MY; csrftoken=m8qPPb8gyPGKCaebPYor79eJOXLUChyd; _QPWSDCXHZQA=9b24ad82-726e-4981-96ad-6382350c0608; AMP_TOKEN=$NOT_FOUND; _gid=GA1.3.1557358498.1662828107; _dc_gtm_UA-61915055-6=1; G_AUTHUSER_H=0; SPC_T_ID="E0P//NN9HAUFfgZlSfPVR8iYaewkJkVOPHBbi6DLUkIu9Wob39nZ0Vj6KpwtGdcayAsEeV6l5lN29GIqNNnB6fm+NBRhPxoDh8VXftJSsXk="; SPC_U=856684198; SPC_T_IV="beE+ifPvcqb1noPRXc4Hpg=="; SPC_T_ID=E0P//NN9HAUFfgZlSfPVR8iYaewkJkVOPHBbi6DLUkIu9Wob39nZ0Vj6KpwtGdcayAsEeV6l5lN29GIqNNnB6fm+NBRhPxoDh8VXftJSsXk=; SPC_T_IV=beE+ifPvcqb1noPRXc4Hpg==; SPC_ST=.bWV3bERSTktnWEdjeHlvMWlB1AO0lRmzf5IMWD3gvfpxy0HwdGNhfFkZD0suvo2LORwDazC15QQhuwVSilrNasRYoHuCEHvsRzuhu0SgC7XWvsp8CpIAT3ckLEPE1ZudBnqoalO+7Yv5LikrYcgZ1IqjgMJX1cgbf+lxZpKOCnakaamE3MY482HSezFOqNs119AcK+N9eZZB9dknkA+rxg==; SPC_SI=O/sFYwAAAAA0WEFoemg2cmXI4wAAAAAAZFBjMjJKUGI=; SPC_R_T_ID=E0P//NN9HAUFfgZlSfPVR8iYaewkJkVOPHBbi6DLUkIu9Wob39nZ0Vj6KpwtGdcayAsEeV6l5lN29GIqNNnB6fm+NBRhPxoDh8VXftJSsXk=; SPC_R_T_IV=beE+ifPvcqb1noPRXc4Hpg==; ds=8364167a7ce40dee39c54db05f6bf551; cto_bundle=qmOu4V9MNThVazdDczl5Z0FNdyUyRlJ1ZFgzVjZWV0VhWkUxNG11eWRRZG8lMkJTVThzTEUzYXFyYnZ0QmhRTEU2Q05tS00wWXVEOWJnenYyNkxzSzNPeEhCMkt2VGhOdFM0Y3ExcTFnUUdvQjMlMkZPWHdFdVhLNmxnVTdLeU5sRUZ4bFBrT3Y5RldsNFVRRlk0JTJGbVRkaElyczVscnc5USUzRCUzRA; shopee_webUnique_ccd=Ympwn0uW8BXhutcNXG0jNQ==|tyBXQhupTTjXPRm7RcD0g9+oV7e3W048PMHckqRoaPJMMPgHA78ne6PQjexFvyX4oVTOMk34dWNESKQya9caO0Tb2Q==|tIn1z3qQqBgSZr+B|05|3; SPC_EC=eWY3c1FuejFHdWh6WjAyTGu1GkmDBD41Vckd67XOkTJxm5TZZhm14NDmUi+9MhA9rGoBit0sIH6v+dRTVese0bkx1RxJ4pmTPf2hixNWkTxMpJxpZiAEbaX3N/i7XBsaC7kTYPQMKoxCikSOUh961yQlGnTyzfPM5M2hwX1R3Y0=; _ga_H06K3499BD=GS1.1.1662828105.32.1.1662828136.29.0.0; _ga=GA1.1.779307584.1661321318',
      'x-api-source': 'pc',
      'x-csrftoken': 'm8qPPb8gyPGKCaebPYor79eJOXLUChyd',
      'x-requested-with': 'XMLHttpRequest',
      'x-shopee-language': 'zh-Hans',
      'user-agent': randUserAgent('desktop', 'chrome', 'linux'),
    };
  } else if (country_code == 'PH') {
    axios.defaults.headers.common = {
      'af-ac-enc-dat':
        'AAcyLjMuMS05AAABgzKcfCoAAArUAjsAAAAAAAAAAC5sJmeTqFiVYtyjWLXk+pOzZzq5pWmBCsToGXNKu/zn89+ko37ftzIDMqGyVNJ5Rolfa6WaaUxD4lhMwcXqQXryJEPzlpZiL2ujdaX1vehLJK4Q6nlMLysKMVrCzXSlVkLbzzd0HxgiKPgWYYlvvERRekKM4097e3lLbuGEMh9Ephtrx5Fjs4yw8pGWNnYQjtmnppYl4WSi0Lelv636ABArUTKsIBd4hhDsKN5ui0ncLmQ9NpFjs4yw8pGWNnYQjtmnppaRY7OMsPKRljZ2EI7Zp6aWoqzSB90vfwlPhiAYAuSNkZlRtq1E9N/jaTbhRccFmyKvh/BbFAtUrDmAO7kLLJulJVYUJ3s4uxjfQePU6NIpm8M1OmQCFiq907IsJMavjWQfIUZXdlqhDTU1fW7pH0CcEbpf2zXKdkrq+dMGDMEg4pM0VLiPVVPyw6XUES05uuLxlRbc5M4d4I7i8YMKriBEkWa/BKbUE11xyPEB6SATHfHCug/pkvos7luH1BLG4oZiRSZHzgJwcsHp2Yw+dcNQaRqBxr0wWIrxGZGys3a9wsM1OmQCFiq907IsJMavjWQJO+Ecsp32BeUV9LxRaZxEE4NLPoWZBWXyTqa2Ah3R9ZcqlWoElPRl6ekEWeJsUpsQHwULIvArTiNS5sWVtEC9O6xN+rZRmfTmcIMUzMFEcydEMZdOrBgHhpj3P3bdDDsVwZEYcrGRjpwWQ4u+6+9rPad3Dxuy5QdFd4KeCtBmIj8o6JpdUWc8okiHF/oNKO4=',
      'x-api-source': 'pc',
      'x-requested-with': 'XMLHttpRequest',
      'x-csrftoken': 'Jrm6W3riNIn0FgrTlKwCil9Op6FokZCe',
      'x-shopee-language': 'en',
      'sz-token':
        '5sGBrwa3MPbuskm0FejZHQ==|HslGau08zavJrM/zcOp8LnY6Cn2ArjkVnd32mwP/cN+f/sPMoj3S+5fLCmG9WjyYAA3PVMwxduXSvAK0H0476X4XcA==|TgEv7TWTddd0sPg5|05|3',
      cookie:
        'REC_T_ID=1f1b4c43-2765-11ed-9f0c-2cea7fac6bc7; SPC_IA=-1; SPC_F=5KYInnh2CGLVk08S7n3Xi3uUVF3yFPdC; REC_T_ID=1f1d43aa-2765-11ed-b12a-c28f3adfd83d; _gcl_au=1.1.858351403.1661755078; _fbp=fb.1.1661755078669.1802009853; G_ENABLED_IDPS=google; SPC_CLIENTID=NUtZSW5uaDJDR0xWufkijiyaykmgrxyn; __LOCALE__null=PH; csrftoken=Jrm6W3riNIn0FgrTlKwCil9Op6FokZCe; SPC_SI=mall.L9FApf5pdcLD3i0FuS8yLSbggmId0ED3; _QPWSDCXHZQA=06bedea0-a510-4062-80c7-5836b6cf172e; AMP_TOKEN=$NOT_FOUND; _gid=GA1.2.594053927.1663001430; _dc_gtm_UA-61918643-6=1; G_AUTHUSER_H=0; SPC_T_ID="NMurv5V8RIPF5PTRvKsRbMEwQsyLbRNdeMR0cIFo10ogQhJmUJLmLuiDkXZbbFgf0zreW9h/ZG9neQVLZx/IaPGAl3faV3lV/yFVBJmxP4U="; SPC_U=862871160; SPC_T_IV="leWVU5TGjKCKJXUSW8aNjA=="; SPC_T_ID=NMurv5V8RIPF5PTRvKsRbMEwQsyLbRNdeMR0cIFo10ogQhJmUJLmLuiDkXZbbFgf0zreW9h/ZG9neQVLZx/IaPGAl3faV3lV/yFVBJmxP4U=; SPC_T_IV=leWVU5TGjKCKJXUSW8aNjA==; SPC_ST=.UUh2alZQeFF3QnJHdDBQUXIFJxaHE0245lphNdiIPM64+i+u3blC2bqSTZz0bEw+F/luHNoERcOBs/Q2BRD9W4ZMO8Lrr5pW57MGMqg+MjcgraFaQf9Jzk4sX43iEfQ4RBf5AEM0ikqQqaEfuphVlYo489oG5VOivxY6F4evCkSNGRuJ1BJDhKSeUWEbRowalLmkeGn6nD2RI0n062EBxw==; SPC_R_T_IV=leWVU5TGjKCKJXUSW8aNjA==; SPC_R_T_ID=NMurv5V8RIPF5PTRvKsRbMEwQsyLbRNdeMR0cIFo10ogQhJmUJLmLuiDkXZbbFgf0zreW9h/ZG9neQVLZx/IaPGAl3faV3lV/yFVBJmxP4U=; _ga=GA1.1.265363151.1661755081; cto_bundle=pdpx0V85T01uNThMbHJjU2N1eHBCTGdDZWclMkJPYnZ5WkpKQTd4UG93eWl5UExyWDBPdXFBTWNTVU80b0JWMkZzVGdoYSUyQk9LWlBsRTNTNGNUM1JSaUw5Rng0NXB4VlolMkJqSU5GVXpXMFp1T1VFeCUyRjdCemg2Q1NDbUgyNXNtZzVvTE82RjElMkI4ajcyeTJVd3JmcFY4bFpBUnBicTVRJTNEJTNE; _ga_CB0044GVTM=GS1.1.1663001429.4.1.1663001458.31.0.0; SPC_EC=djdaQW56NVFMU0NUNWxwN9jYhCtGaOw24KPUjQF4f8FljXVuMOB/DLUgTs9JoHKxC3vkSHPgYcwQ/59Nej/O91jfxctJzxZTOoT/b9emJYp1WdjU1N563M4OZqSxRrMdPBBe2kNyRvaTIQQQBFM6EJkVC/tu9Is5Q8PdRafNj28=; shopee_webUnique_ccd=3pRBL4+CuAZN07QgCakNXw==|Yptf7I4jRZp8S0Wjo0KzcUH+eagIRVg6ItaV10MrbugSgOkqJnbRN1R+3lphDsN8BfgwkOcnvXKHAFxe3YI2NG4hWg==|3X5SdLBPfkNUkiOl|05|3; ds=9511f9342d10d791781ad86d0080cca9',
      'user-agent': randUserAgent('desktop', 'chrome', 'linux'),
    };
  }
}

module.exports = {
  domainMapping,
  headerMapping,
};

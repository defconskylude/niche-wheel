"""Build audiences.json for the opt-in page audience explorer.
Input: raw.json (all tabs of the Trade Desk audience sheet as CSV rows, see fetch step in README).
Run: python3 build_audiences.py  -> audiences.json (copy to repo root).
Tab -> category grouping lives in G below; add new tabs there.
"""
import json,re
d=json.load(open('raw.json'))
G=[("B2B","Decision makers & firmographics",["B2B ZoomInfo","B2B Company Revenue","B2B ECOM/Owners","B2B Decision Makers","B2B Owner","B2B Leadership & Management","B2B Mergers","B2B Private Equity"]),
("B2B","Industries",["B2B Software","B2B Automation","B2B ERP Solutions","B2B Enterprise Solutions","B2B Distribution","B2B Warehouse Management","B2B Warehouse Automation","B2B Fleet Management","B2B Fleet","B2B Food Manufacturing","B2B Food","B2B Kitchen Manufacturing","B2B Commercial/Apartment Owners & REITS","B2B Medical Devices","B2B Wellness","B2B Sports Medicine","B2B Physical Therapy","B2B/B2C Cannibus"]),
("B2B","Events & sponsorships",["B2B Conference Events","B2B Tradeshow","B2B Conventions","B2B Corporate Events","B2B Event Planning","B2B Sponsorship","B2B Leadership Event","B2B Motivational Speakers"]),
("B2C","Health & wellness",["B2C GLP1","B2C Peptides","B2C Stem Cell/Regenerative","B2C Joint Pain","B2C Neuropathy","B2C Autoimmune","B2C Chronic Condition","B2C Hair Loss","B2C Gut Health","B2C Menopause","B2C Anti Aging"]),
("B2C","Wealth & finance",["B2C Net Worth","B2C Household Income","B2C Liquid Assets","B2C Assets","B2C Wealth Management","B2C Financial Advice","B2C 401K","B2C Tax Shelter","B2C Crypto","B2C Yacht","B2C Equity/HELOC","B2C/B2B Experian"]),
("B2C","Insurance & retirement",["B2C Medicare","B2C Annuity","B2C Life Insurance","B2C Universal Life Insurance","B2C Final Expense","B2C Health Insurance"]),
("B2C","Credit & cards",["B2C Credit Cards","B2C AMEX","B2C Fico Scores"]),
("B2C","Legal & injury",["B2C Personal Injury","B2C Car Accident","B2C Car Accident/Motor Vehicle Accidents","B2C Auto Accidents","B2C Motorcycle Accidents","B2C Commercial Truck Accidents","B2C Slip & Fall","B2C Workplace Injury","B2C Tort Law"]),
("B2C","Faith & values",["B2C Faith Based","B2C Christian","B2C Bible","B2C 2nd Amendment"]),
("B2C","Political",["B2C Conservatives","B2C Republican","B2C Democrat","B2C Liberals"])]
bytab={t['tab']:t for t in d}
allg=[n for g in G for n in g[2]]
missing=[n for n in bytab if n not in allg]; assert not missing, missing
def label(n):
    n=re.sub(r'^(B2B/B2C|B2C/B2B|B2B|B2C)\s+','',n).replace('Cannibus','Cannabis').replace('GLP1','GLP-1').replace('Fico','FICO').replace('Anti Aging','Anti-Aging')
    return n
def num(x):
    x=(x or '').replace(',','').strip()
    try: return int(float(x))
    except: return 0
tabs=[];rows=[];descs={};dl=[]
cats=[]
for typ,cat,names in G:
    cats.append([typ,cat])
    for n in names:
        t=bytab[n]; h=[x.strip() for x in t['header']]
        ti=len(tabs); tabs.append([label(n),len(cats)-1,typ if not n.startswith(('B2B/B2C','B2C/B2B')) else 'B2B+B2C'])
        ix={k:i for i,k in enumerate(h)}
        idk='Active IDs' if 'Active IDs' in ix else 'Device IDs'
        cnt=0
        for r in t['rows']:
            g=lambda k: r[ix[k]] if k in ix and ix[k]<len(r) else ''
            path=g('Data Full Path').strip()
            if not path: continue
            parts=[p.strip() for p in path.split('>')]
            prov=g('Third Party Data Brand Name').strip() or (parts[1] if parts[0] in ('Branded','Custom Segment','Custom Segments') and len(parts)>1 else parts[0])
            prov=re.sub(r'^(US|SG)\s+','',prov)
            de=g('Description').strip()
            if de and de not in descs: descs[de]=len(dl); dl.append(de)
            rows.append([ti,prov,path,num(g(idk)),num(g('Persons')),num(g('Households')),num(g('CTV')),descs.get(de,-1) if de else -1])
            cnt+=1
        tabs[-1].append(cnt)
out={"v":"2026-11","source":"The Trade Desk audience marketplace","cats":cats,"tabs":tabs,"rows":rows,"descs":dl}
s=json.dumps(out,separators=(',',':'),ensure_ascii=False).replace('b\ufffdrgerliches','bürgerliches').replace('\ufffd','')
if 0: s=json.dumps(out,separators=(',',':'),ensure_ascii=False)
open('audiences.json','w').write(s)
import gzip; print(len(rows),len(tabs),len(dl),'bytes',len(s),'gz',len(gzip.compress(s.encode())))

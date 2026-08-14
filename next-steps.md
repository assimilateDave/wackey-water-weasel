# Next steps: Porkbun DNS → GitHub Pages

Steps **A** (Hostinger unlock / EPP) and **B** (Porkbun transfer paid) are done. The domain is transferring or already at Porkbun. Remaining work is GitHub custom domain, Porkbun DNS, HTTPS, then cancel Hostinger hosting.

Live site until the custom domain works:  
https://assimilatedave.github.io/wackey-water-weasel/

---

## C. After Porkbun has the domain — GitHub first, then DNS

Do not point nameservers away from Hostinger until Porkbun shows the domain as **active** in your account.

### GitHub Pages custom domain

1. Open the repo: **Settings → Pages**.
2. Leave source as **Deploy from a branch** / `main` / `/ (root)`.
3. **Custom domain:** enter `assimilationtech.com` → **Save**.  
   GitHub will add a `CNAME` file on `main`. The DNS check will fail until Porkbun records exist. That is expected.

### Porkbun nameservers and DNS

4. Porkbun → **Domain Management → Details → Nameservers**. If they still list Hostinger, switch to **Porkbun nameservers**.
5. Open **DNS** (or hover the domain → **DNS**). Either use **Quick DNS Config → Github** and set `www` to `assimilatedave.github.io`, or enter:

| Host | Type | Answer |
| --- | --- | --- |
| `@` | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `@` | AAAA (optional) | `2606:50c0:8000::153` |
| `@` | AAAA | `2606:50c0:8001::153` |
| `@` | AAAA | `2606:50c0:8002::153` |
| `@` | AAAA | `2606:50c0:8003::153` |
| `www` | CNAME | `assimilatedave.github.io` |

The `www` CNAME target is `assimilatedave.github.io`, **not** `…/wackey-water-weasel`.

6. Recreate **MX** and **TXT** (SPF, Google/Zoho verify) from the Hostinger DNS screenshot taken in step A. Skipping this can break email.
7. Turn **privacy** back on at Porkbun.

---

## D. HTTPS, then leave Hostinger hosting

8. Wait for DNS (often minutes, up to 24 hours).
9. GitHub → **Settings → Pages**. When the custom domain check is green, enable **Enforce HTTPS**.
10. Confirm both of these show the GitHub site (healthcare / Assimilation Technology copy):
    - https://assimilationtech.com
    - https://www.assimilationtech.com
11. Only then cancel the Hostinger **web plan**. Keep Hostinger hosting until this works. The domain stays at Porkbun.

---

## Order that still matters

- GitHub **Custom domain** field before or with DNS.
- Porkbun nameservers + A/CNAME before **Enforce HTTPS**.
- Do not cancel Hostinger hosting until HTTPS works on the real domain.

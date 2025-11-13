# Compliance Quick Guide: AI Agents for Government

**One-page reference for November 16-18 presentations**

---

## CERTIFICATION DECISION TREE

**Start here to determine what you need:**

1. **Federal agency processing federal data?**
   - YES → **FedRAMP Moderate or High required**
   - NO → Continue to 2

2. **Healthcare/public health handling patient records?**
   - YES → **HIPAA + Business Associate Agreement required**
   - NO → Continue to 3

3. **Law enforcement with criminal justice data?**
   - YES → **CJIS compliance required**
   - NO → Continue to 4

4. **State/local government general use?**
   - YES → **SOC 2 Type II minimum**

---

## COMPLIANCE COMPARISON TABLE

| Certification | Your Agency | When Required | What It Covers | Tools Available | Typical Timeline |
|---|---|---|---|---|---|
| **FedRAMP** | Federal | Processing federal data | Cloud service security, authorization, continuous monitoring | 35 certified | 2-4 months |
| **HIPAA** | Health/Public Health | Protected health information | Privacy, encryption, access controls, breach notification | 28 compliant | 4-8 weeks |
| **CJIS** | Law Enforcement | Criminal justice information | Advanced authentication, encryption, audit logs, personnel screening | 18 certified | 3-6 months |
| **SOC 2 Type II** | Any government | Recommended baseline | Access controls, encryption, change management, incident response | 95 certified | 2-4 weeks |

---

## TOP 5 COMPLIANCE MISTAKES

❌ **Assuming FedRAMP covers HIPAA** - Different frameworks, different requirements

❌ **Skipping Business Associate Agreement (BAA)** - HIPAA mandate; no exceptions

❌ **Not checking state-specific requirements** - CJIS has federal baseline + state additions

❌ **Overlooking data residency** - Some certifications require US-only data centers

❌ **Not verifying current certification** - Certifications expire; verify status before procurement

---

## QUICK COMPLIANCE CHECKLIST

**BEFORE PROCUREMENT:**

- [ ] Identify data type (federal, health, criminal justice, general)
- [ ] Determine required certification(s)
- [ ] Filter Agent Shift Catalog by compliance requirement
- [ ] Request certification documentation from vendor
- [ ] Review certification scope covers your use case
- [ ] Verify certification is current (not expired)

**DURING PROCUREMENT:**

- [ ] FedRAMP: Check [marketplace.fedramp.gov](https://marketplace.fedramp.gov)
- [ ] HIPAA: Vendor must sign Business Associate Agreement (BAA)
- [ ] CJIS: Vendor must sign CJIS Security Addendum
- [ ] SOC 2: Request Type II report (not just letter) - verify recent (< 12 months)

**AFTER SELECTION:**

- [ ] Execute required agreements (BAA, CJIS Addendum, etc.)
- [ ] Configure security controls (encryption, MFA, audit logging)
- [ ] Conduct security assessment if required
- [ ] Obtain Authority to Operate (ATO) if federal
- [ ] Document in compliance matrix
- [ ] Schedule ongoing monitoring/audits

---

## WHERE TO VERIFY CERTIFICATIONS

**FedRAMP:**
- Official: [marketplace.fedramp.gov](https://marketplace.fedramp.gov)
- Check authorization level (Low, Moderate, High)
- Verify expiration date

**HIPAA:**
- Ask vendor for BAA and security documentation
- Request SOC 2 Type II report (complementary)
- No central registry; vendor documentation required

**CJIS:**
- Ask vendor for CJIS Security Addendum
- Request FBI approval letter (for cloud providers)
- Verify cloud provider has FBI approval for CJI

**SOC 2:**
- Request current SOC 2 Type II report (full report, not summary)
- Verify report is < 12 months old
- Check for exceptions/qualifications in control section

---

## KEY QUESTIONS FOR VENDORS

**Compliance & Certifications:**
1. What compliance certifications do you hold?
2. Which certification level applies to my use case?
3. Can you provide current certification documentation?

**Data Security:**
4. How do you encrypt data at rest and in transit?
5. What authentication methods do you support (MFA)?
6. How long do you retain audit logs?

**Legal Agreements:**
7. Will you sign a Business Associate Agreement (BAA)?
8. Will you sign a CJIS Security Addendum (if law enforcement)?
9. What is your data deletion policy upon contract end?

**Ongoing Compliance:**
10. How do you handle security incidents (timeline)?
11. When is your next compliance audit/recertification?
12. What is your SLA for security patches?

---

## COMPLIANCE QUICK FACTS

**FedRAMP:**
- Only for cloud services; required for all federal data
- Most vendors have invested $1-3M in authorization
- Includes annual security assessment requirement
- Faster procurement than non-FedRAMP (pre-authorized)

**HIPAA:**
- Applies even with de-identified data if linkage possible
- Business Associate Agreement is not optional
- Penalties up to $50,000 per violation (max $1.5M/year)
- Breach notification required within 60 days

**CJIS:**
- Required for ANY access to criminal history or NCIC
- Advanced authentication (MFA) is mandatory
- Triennial (every 3 years) independent audit required
- Personnel fingerprint background checks required

**SOC 2:**
- Requires Type II (point-in-time Type I insufficient)
- Should be < 12 months old (annual updates recommended)
- Auditor opinion: look for "unqualified" (no major issues)
- Review exceptions carefully—they indicate control gaps

---

## IMPLEMENTATION TIMELINE SUMMARY

| Phase | Timeline | Key Activities |
|---|---|---|
| **Planning & Selection** | 2-4 weeks | Requirements analysis, catalog review, vendor evaluation |
| **Vendor Due Diligence** | 1-2 weeks | Request certifications, review documentation, verify status |
| **Procurement** | 2-8 weeks | RFP/RFQ, evaluation, award (faster with GSA Schedule) |
| **Legal Agreements** | 1-2 weeks | BAA, CJIS Addendum, contract negotiation |
| **Implementation** | 2-8 weeks | Configuration, security setup, testing, training |
| **Authority to Operate** | 2-4 weeks | Security assessment (federal), ATO approval |
| **Total** | **3-6 months** | Typical end-to-end timeline |

---

## RESOURCES & CONTACTS

**Federal Resources:**
- FedRAMP Marketplace: [marketplace.fedramp.gov](https://marketplace.fedramp.gov)
- GSA Schedule 70: [gsa.gov](https://www.gsa.gov/)
- NIST Security Framework: [nist.gov](https://www.nist.gov/)

**Healthcare:**
- HHS HIPAA: [hhs.gov/hipaa](https://www.hhs.gov/hipaa/)
- BAA Template: Available from vendor or HHS

**Law Enforcement:**
- FBI CJIS: [fbi.gov/cjis](https://www.fbi.gov/services/cjis)
- State Criminal Justice System Agency (CSA)

**Agent Shift Resources:**
- Full Compliance Guide: [docs/COMPLIANCE.md](docs/COMPLIANCE.md)
- Government Implementation Guide: [GOVERNMENT_GUIDE.md](GOVERNMENT_GUIDE.md)
- Catalog with Compliance Filters: Browse by FedRAMP, HIPAA, CJIS, SOC 2

---

## QUESTIONS?

**Need help with your compliance requirements?**

- Email: support@agentshift.dev
- GitHub Discussions: [github.com/crypticpy/agent-shift/discussions](https://github.com/crypticpy/agent-shift/discussions)
- Compliance Hotline: [Contact us for consulting]

---

*Agent Shift: Free, Open-Source AI Agent Catalog*
*GitHub: https://github.com/crypticpy/agent-shift*

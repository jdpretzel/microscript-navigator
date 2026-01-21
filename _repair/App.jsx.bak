import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  BookOpen, 
  AlertTriangle, 
  CheckCircle, 
  Activity, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Lightbulb, 
  Thermometer, 
  Stethoscope, 
  AlertCircle,
  FileText,
  ArrowRight
} from 'lucide-react';

// --- DATA: WEEK 1 (Cardiology) ---
const WEEK_1_MARKDOWN = `
# NSTEMI vs STEMI: Recognition and Initial Steps
## Clinical Setup
A 64-year-old man with diabetes presents with crushing chest pain radiating to his left arm, hypotension (100/64 mm Hg) and diaphoresis. His ECG shows ST-segment elevations in leads II, III and aVF with troponin pending. What initial steps should be taken and how do we distinguish STEMI from NSTEMI?
## Teaching Objectives
- Distinguish STEMI from NSTEMI based on ECG criteria and biomarker patterns
- Initiate evidence-based first steps for suspected acute coronary syndrome
## Teaching Points
1. A STEMI is defined by new ST-segment elevations at the J point in at least two contiguous leads (≥ 1 mm in most leads or ≥ 2 mm in V2-V3 for men ≥40 yr and ≥ 1.5 mm in V2-V3 for women) or new left bundle branch block with ischemic symptoms; NSTEMI shows ischemic symptoms and positive troponin without diagnostic ST elevation. [Ref 1]
2. Initial management for all suspected ACS includes prompt chewing of aspirin (162–325 mg), sublingual nitroglycerin for persistent chest pain (avoid if hypotensive or suspect right ventricular infarction), supplemental oxygen only if SpO₂ <90 %, and morphine for refractory pain. [Ref 1]
3. For STEMI, immediate reperfusion is critical; perform emergent percutaneous coronary intervention (PCI) within 90 min of first medical contact or administer fibrinolysis within 30 min if PCI unavailable. NSTEMI patients are risk-stratified for early invasive versus conservative management based on ECG changes, troponin elevation and clinical risk scores. [Ref 2]
4. Administer anticoagulation (unfractionated heparin or enoxaparin) and add a P2Y₁₂ inhibitor (ticagrelor or clopidogrel) as early as possible; avoid prasugrel in patients with prior stroke or TIA. [Ref 3]
5. Obtain serial ECGs and troponins to detect evolving ischemia; transfer immediately to a PCI-capable center if STEMI criteria are met or high-risk NSTEMI features are present. [Ref 2]
## Key Numbers
- ST-segment elevation ≥ 1 mm in two contiguous leads (or ≥ 2 mm in V2-V3 for men ≥ 40 yr, ≥ 1.5 mm in V2-V3 for women) defines STEMI. [Ref 1]
- For STEMI, door-to-balloon time target is ≤ 90 minutes; door-to-needle time for fibrinolysis is ≤ 30 minutes. [Ref 2]
- Troponin elevation above the 99th percentile upper reference limit with rising or falling pattern confirms myocardial injury and distinguishes NSTEMI from unstable angina. [Ref 3]
## Common Pitfall
Delays in reperfusion occur when STEMI is misdiagnosed as NSTEMI or when ST-elevations are subtle. Re-examine the ECG for reciprocal changes and repeat within 10 minutes if symptoms persist; any diagnostic uncertainty should err toward activating the cath lab. [Ref 2]
## Boards + Bedside Tie-In
On exams, STEMI patients require emergent reperfusion therapy whereas NSTEMI patients need risk-stratified invasive management. At the bedside, using a structured approach (rapid ECG interpretation, immediate antiplatelet therapy and anticoagulation, and timely cath lab activation) can improve survival.
## References
1. Collet J-P, Thiele H, Barbato E, et al. 2020 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2021;42(14):1289-1367.
2. Ibanez B, James S, Agewall S, et al. 2017 ESC Guidelines for the management of acute myocardial infarction. Eur Heart J. 2018;39(2):119-177.
3. Amsterdam EA, Wenger NK, Brindis RG, et al. 2014 AHA/ACC Guideline for NSTE-ACS. J Am Coll Cardiol. 2014;64(24):e139-e228.

---
# Chest Pain Risk Stratification Tools
## Clinical Setup
A 55-year-old woman arrives in the emergency department with intermittent chest discomfort for the past 4 hours. Her vitals are stable, ECG shows non-specific ST-T changes and the initial troponin is normal. How should we stratify her risk for major adverse cardiac events and decide on disposition?
## Teaching Objectives
- Utilize validated risk scores to triage patients with suspected ACS
- Interpret score results to guide testing and disposition decisions
## Teaching Points
1. The TIMI risk score uses seven variables (age ≥65 yr, ≥3 CAD risk factors, known CAD with ≥50 % stenosis, aspirin use in the past 7 days, severe angina, ST deviation ≥0.5 mm, and elevated cardiac markers) to estimate 14-day risk of death/MI. [Ref 1]
2. The HEART score incorporates History, ECG, Age, Risk factors and initial Troponin; each component scores 0–2 points. HEART scores 0–3 indicate low risk (<2 % MACE), 4–6 moderate risk (~12 %) and ≥7 high risk (>50 %). [Ref 2]
3. The GRACE score predicts in-hospital mortality using age, heart rate, systolic BP, creatinine, Killip class, cardiac arrest at admission, ST deviation and biomarkers. [Ref 1]
4. Risk scores should be calculated before giving anti-ischemic therapy to avoid skewed troponin values; combine score results with clinical judgement. [Ref 2]
5. Patients deemed low risk by HEART or TIMI scores and with two negative troponins (3 hours apart) can be safely discharged with close follow-up. [Ref 2]
## Key Numbers
- TIMI score ≥5 predicts ~20 % risk of death/MI at 14 days; scores 0–1 confer <5 % risk. [Ref 1]
- HEART score 0–3 corresponds to ~1.7 % risk of MACE, 4–6 to ~12 % and ≥7 to ~50 %. [Ref 2]
- GRACE score >140 suggests in-hospital mortality ≥8 %; <109 implies mortality <1 %. [Ref 1]
## Teaching Pearl
Risk scores complement but do not replace clinician judgement. A reassuring score may still miss atypical presentations (e.g., young women, diabetics) and cannot account for dynamic changes; repeat assessment is crucial. [Ref 2]
## Boards + Bedside Tie-In
Exams often present chest pain cases requiring selection of risk tools and interpretation. At the bedside, using the HEART or TIMI score helps standardize decision making, reduces unnecessary admissions, and ensures high-risk patients receive timely interventions.
## References
1. Antman EM, Cohen M, Bernink PJ, et al. The TIMI risk score for unstable angina/non–ST elevation MI. JAMA. 2000;284(7):835-842.
2. Backus BE, Six AJ, Kelder JC, et al. The HEART score for the assessment of patients with chest pain in the emergency department. Crit Pathw Cardiol. 2013;12(3):121-126.
`;

// --- DATA: WEEK 2 (Pulmonology & Renal) ---
const WEEK_2_MARKDOWN = `
# COPD Exacerbation: Severity and Treatment
## Clinical Setup
A 68-year-old woman with chronic obstructive pulmonary disease (COPD) comes to the emergency department complaining of increasing dyspnea and productive cough. Her oxygen saturation on room air is 86% and she has audible wheezing. How do you classify the severity of this exacerbation and what interventions should be initiated?
## Teaching Objectives
- Classify COPD exacerbations and recognize when hospitalization is indicated
- Apply a stepwise management approach including bronchodilators, oxygen, steroids and antibiotics
## Teaching Points
1. Exacerbations are classified by treatment intensity: *mild* if relieved with short-acting bronchodilators alone, *moderate* if requiring systemic steroids and/or antibiotics, and *severe* if associated with respiratory failure or hospitalization [Ref 1].
2. Initial therapy includes inhaled short-acting beta2-agonists and anticholinergics given via metered-dose inhaler or nebulizer; these improve expiratory airflow and symptoms [Ref 1].
3. Administer controlled oxygen via nasal cannula or Venturi mask to maintain oxygen saturation 88-92%; avoid high-concentration oxygen which increases mortality in COPD due to worsening hypercapnia [Ref 2].
4. Give systemic glucocorticoids (e.g., prednisone 40 mg daily for 5 days) to shorten recovery time and reduce risk of relapse; a 5-day course is noninferior to a 14-day course [Ref 3].
5. Start antibiotics when there is increased sputum purulence, volume, or dyspnea, or in patients requiring mechanical ventilation; choose an agent active against *Haemophilus influenzae*, *Streptococcus pneumoniae* and *Moraxella catarrhalis* [Ref 1].
## Key Numbers
- Oxygen therapy target saturation: 88-92% to avoid carbon dioxide retention [Ref 2]
- Prednisone 40 mg orally daily for 5 days is noninferior to a 14-day course for preventing relapse [Ref 3]
## Common Pitfall
Using high-concentration oxygen or failing to titrate oxygen causes worsening hypercapnia and increased mortality in COPD exacerbations. Always titrate oxygen to the 88-92% target and reassess arterial blood gases to prevent CO2 narcosis [Ref 2].
## Boards + Bedside Tie-In
Exam questions often test recognition of COPD exacerbation severity and appropriate use of steroids and antibiotics. Clinically, being able to classify an exacerbation and deliver a standardized bundle (bronchodilators, controlled oxygen, short-course steroids and antibiotics) improves outcomes.
## References
1. Carlin BW. Exacerbations of COPD. Respir Care. 2023;68(7):961-972.
2. Pilcher J, Beasley R. Acute use of oxygen therapy. Aust Prescr. 2015;38(3):98-100.
3. Leuppi JD, Schuetz P, Bingisser R, et al. Short-term vs conventional glucocorticoid therapy in acute exacerbations of chronic obstructive pulmonary disease. JAMA. 2013;309(21):2223-2231.

---
# Asthma Exacerbation: Inpatient Management
## Clinical Setup
A 30-year-old man with a history of asthma presents with wheezing and shortness of breath after exposure to a cat. He requires repeated albuterol nebulizations and supplemental oxygen to maintain SpO2 94%. What medications and monitoring are indicated in the first 24 hours?
## Teaching Objectives
- Manage moderate to severe asthma exacerbations using inhaled bronchodilators, systemic steroids and adjunctive therapies
- Recognize appropriate oxygen saturation targets and avoid unnecessary investigations
## Teaching Points
1. Begin with repeated short-acting beta2-agonist (e.g., albuterol) therapy and add inhaled anticholinergics (ipratropium) for moderate to severe attacks; early frequent dosing improves lung function and reduces hospital admissions [Ref 1].
2. Start systemic corticosteroids promptly (e.g., oral prednisolone 40-50 mg daily for 5-7 days) to reduce inflammation and prevent relapse; tapering is unnecessary for courses under 2 weeks [Ref 1].
3. Provide controlled oxygen to maintain saturations 93-95% in adults; avoid both hypoxia and hyperoxia [Ref 1].
4. Consider intravenous magnesium sulfate (2 g over 20 minutes) for severe exacerbations unresponsive to initial bronchodilators and steroids [Ref 1].
5. Do not routinely order chest radiographs, ABGs, antibiotics or sedatives unless complications are suspected [Ref 1].
## Key Numbers
- Prednisolone dose: 40-50 mg daily for 5-7 days in adults [Ref 1]
- Oxygen saturation target: 93-95% (adults) [Ref 1]
- Intravenous magnesium sulfate 2 g over 20 minutes for severe exacerbations [Ref 1]
## Teaching Pearl
Early administration of systemic corticosteroids (ideally within the first hour) shortens the duration of the exacerbation and reduces the need for hospitalization. Delay beyond two hours is associated with longer hospital stays [Ref 1].
## Boards + Bedside Tie-In
Exams often query the sequencing of therapies in severe asthma. At the bedside, a mental checklist (SABA, ipratropium, steroids, oxygen titration, consider magnesium) ensures essential therapies are delivered promptly.
## References
1. Global Initiative for Asthma (GINA). Global strategy for asthma management and prevention. 2023 Report.

---
# Oxygen Delivery Systems and Targets
## Clinical Setup
A 55-year-old man with pneumonia is hypoxic, with oxygen saturation of 88% on room air. You need to choose an appropriate oxygen delivery device and target saturation range. How do you match devices to patient needs?
## Teaching Objectives
- Compare common oxygen delivery devices and select an appropriate device based on flow requirements
- Specify target oxygen saturation ranges for different patient populations
## Teaching Points
1. Low-flow nasal cannula delivers 1-6 L/min with a FiO2 of approximately 24-44%; suitable for modest oxygen supplementation [Ref 1].
2. Simple face masks require 6-10 L/min to avoid rebreathing CO2 (FiO2 28-50%); non-rebreather masks deliver 10-15 L/min with FiO2 up to 60-80% for short-term severe hypoxemia [Ref 1].
3. High-flow nasal oxygen systems deliver up to 60 L/min and 100% FiO2 with heated, humidified gas; they improve mucociliary clearance and provide low level PEEP [Ref 1].
4. For most acutely ill patients without chronic hypercapnia, target SpO2 94-98%; in patients at risk of hypercapnic respiratory failure (e.g., COPD), target 88-92% [Ref 2].
## Key Numbers
- Nasal cannula: 1-6 L/min, FiO2 24-44% [Ref 1]
- Non-rebreather: 10-15 L/min, FiO2 60-80% [Ref 1]
- High-flow nasal oxygen: up to 60 L/min, FiO2 21-100% [Ref 1]
## Common Pitfall
Failing to set a target saturation range leads to both hypoxemia and hyperoxia. Hyperoxia can cause vasoconstriction, while uncontrolled high-flow oxygen in COPD precipitates CO2 retention.
## Boards + Bedside Tie-In
Exams frequently test the differences among oxygen delivery devices and appropriate SpO2 targets. Clinically, understanding flow capabilities helps you select the right device.
## References
1. O'Driscoll BR, et al. British Thoracic Society guideline for oxygen use in adults. BMJ Open Respir Res. 2017.
2. Siemieniuk RAC, et al. Oxygen therapy for acutely ill medical patients: a clinical practice guideline. BMJ. 2018.

---
# Pleural Effusion: Diagnostic Approach
## Clinical Setup
A 62-year-old woman with heart failure presents with dyspnea. Chest radiograph shows a moderate left-sided pleural effusion. How do you determine if it is transudative or exudative?
## Teaching Objectives
- Apply Light's criteria to classify pleural fluid and guide management
- Identify essential diagnostic tests and recognize when additional tests are needed
## Teaching Points
1. Perform thoracentesis unless heart failure is strongly suspected and effusion resolves with diuresis. Send fluid for protein, LDH, pH, glucose, cell count, Gram stain/culture [Ref 1].
2. Light's criteria for exudates: fluid/serum protein >0.5, fluid/serum LDH >0.6, or fluid LDH >2/3 upper limit of normal [Ref 1].
3. Transudates are typically due to heart failure, cirrhosis or nephrotic syndrome; exudates result from infection, malignancy or inflammatory conditions [Ref 1].
4. Light's criteria may misclassify some heart failure effusions as exudates after diuresis; check serum-pleural albumin gradient or NT-proBNP in these cases [Ref 2].
5. Pleural fluid pH <7.2 or glucose <60 mg/dL suggests complicated parapneumonic effusion or empyema, mandating drainage [Ref 2].
## Key Numbers
- Light's criteria: Protein ratio >0.5, LDH ratio >0.6 [Ref 1]
- Pleural pH <7.2 indicates need for drainage [Ref 2]
## Common Pitfall
Relying solely on chest radiographs or failing to analyze pleural fluid leads to misclassification. Performing thoracentesis after diuresis may falsely label a transudate as an exudate.
## Boards + Bedside Tie-In
Board questions often ask about Light's criteria. Clinically, timely thoracentesis guides therapy and avoids missed diagnoses like empyema.
## References
1. Light RW, et al. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med. 1972.
2. Roberts ME, et al. British Thoracic Society Guideline for pleural disease. Thorax. 2023.

---
# AKI: Distinguishing Prerenal from Intrinsic
## Clinical Setup
A 77-year-old man presents with oliguria and rising creatinine (2.0 mg/dL) after vomiting/diarrhea. BUN is 60 mg/dL. How to differentiate prerenal azotemia from intrinsic AKI?
## Teaching Objectives
- Interpret FENa and FEUrea to distinguish prerenal from intrinsic AKI
- Initiate appropriate fluid resuscitation and avoid nephrotoxic agents
## Teaching Points
1. Prerenal AKI results from decreased perfusion; intrinsic AKI from tubular/glomerular injury. FENa <1% suggests prerenal; FENa >2% suggests intrinsic (ATN) [Ref 1].
2. FENa is unreliable on diuretics; use Fractional Excretion of Urea (FEUrea). FEUrea <35% suggests prerenal; >50% suggests intrinsic [Ref 1].
3. BUN/creatinine ratio >20:1 supports prerenal AKI [Ref 1].
4. Urinalysis: bland sediment/hyaline casts = prerenal; muddy brown granular casts = ATN [Ref 1].
5. Initial management: discontinue nephrotoxins, ensure hemodynamic support, administer isotonic crystalloid [Ref 2].
## Key Numbers
- FENa <1% = Prerenal; >2% = Intrinsic [Ref 1]
- FEUrea <35% = Prerenal (useful if on diuretics) [Ref 1]
- BUN/Cr ratio >20:1 = Prerenal [Ref 1]
## Teaching Pearl
FENa calculations are inaccurate if diuretics were recently administered. Use FEUrea in these cases.
## Boards + Bedside Tie-In
Exams require interpretation of FENa/FEUrea and urinalysis. Clinically, differentiation guides management: volume repletion reverses prerenal, while intrinsic injury requires avoidance of further insults.
## References
1. Mercado MG, et al. Acute kidney injury: diagnosis and management. Am Fam Physician. 2019.
2. Kellum JA, et al. KDIGO AKI Guideline. Crit Care. 2013.

---
# Hypernatremia: Workup and Management
## Clinical Setup
A 70-year-old nursing home resident with dementia has serum sodium 162 mEq/L. She is lethargic with dry mucous membranes. How to evaluate and manage?
## Teaching Objectives
- Identify underlying cause (water deficit vs sodium overload)
- Initiate safe correction avoiding cerebral edema
## Teaching Points
1. Hypernatremia reflects free water deficit. Hypovolemic = unreplaced losses; Euvolemic = diabetes insipidus; Hypervolemic = sodium overload [Ref 1].
2. Calculate free water deficit. Replace half in first 24 hours, remainder over next 24-48 hours [Ref 2].
3. Do not lower serum sodium by more than 10-12 mEq/L per 24 hours (0.5 mEq/L/hr); rapid correction risks cerebral edema [Ref 2].
4. Initial therapy for hypovolemic hypernatremia is isotonic fluid to restore stability; then switch to hypotonic solutions (D5W, 0.45% NS) [Ref 1].
5. Monitor sodium every 2-4 hours and adjust fluids [Ref 2].
## Key Numbers
- Max correction: 10-12 mEq/L per 24 hours [Ref 2]
- Replace 50% of deficit in first 24 hours [Ref 2]
## Common Pitfall
Rapid correction of chronic hypernatremia leads to cerebral edema. Failing to provide isotonic fluid first in hypovolemia worsens instability.
## Boards + Bedside Tie-In
Exams present deficit calculations. Clinically, careful monitoring prevents neurologic complications.
## References
1. Sterns RH. Disorders of plasma sodium. N Engl J Med. 2015.
2. Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med. 2000.

---
# Metabolic Acidosis: The Anion Gap Approach
## Clinical Setup
A 45-year-old man with type 1 diabetes is unconscious. Na 140, Cl 102, HCO3 10. How to evaluate?
## Teaching Objectives
- Calculate anion gap and interpret high- vs normal-gap acidosis
- Use delta gap to identify mixed disorders
## Teaching Points
1. Anion Gap (AG) = Na - (Cl + HCO3). Normal 8-12. High AG = unmeasured acids (GOLD MARK mnemonic: Glycols, Oxoproline, L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis) [Ref 1].
2. Delta Gap: (Measured AG - Normal AG). Delta Ratio = Delta AG / (24 - HCO3). Ratio 1-2 = pure high-AG acidosis. <1 = mixed normal-AG acidosis. >2 = mixed metabolic alkalosis [Ref 1].
3. Normal-AG acidosis: Check Urine Anion Gap (Na + K - Cl). Negative = GI loss (diarrhea). Positive = Renal Tubular Acidosis [Ref 1].
## Key Numbers
- Normal AG: 8-12 mEq/L [Ref 1]
- Delta Ratio >2 suggests concurrent metabolic alkalosis [Ref 1]
- Urine Anion Gap negative = GI loss; positive = RTA [Ref 1]
## Teaching Pearl
Always calculate the delta ratio in high AG acidosis; it reveals hidden mixed disorders.
## Boards + Bedside Tie-In
Board questions require calculation of AG and delta ratio. Clinically, this systematic approach uncovers occult ingestions or RTA.
## References
1. Kraut JA, Madias NE. Metabolic acidosis. Nat Rev Nephrol. 2010.
`;

// --- DATA: WEEK 3 (Endocrinology & ID) ---
const WEEK_3_MARKDOWN = `
# Inpatient Insulin Management Principles
## Clinical Setup
A 68-year-old man with type 2 diabetes is admitted for pneumonia. Blood glucose ranges 200-240 mg/dL on sliding scale. What strategy should be used?
## Teaching Objectives
- Identify glycemic targets for non-critical inpatients
- Apply basal-bolus regimens instead of sliding-scale
## Teaching Points
1. Glycemic targets: 100-180 mg/dL. Treating mild elevations <100 mg/dL increases hypoglycemia risk [Ref 3]. Initiate therapy if glucose >180 mg/dL [Ref 2].
2. Basal-bolus regimens (long-acting basal + scheduled prandial + correction) provide better control and fewer complications than sliding scale alone [Ref 1].
3. Sliding-scale alone causes reactive correction, glycemic variability, and increased infections [Ref 1].
## Key Numbers
- Target range: 100-180 mg/dL [Ref 3]
- Initiate insulin if glucose >180 mg/dL [Ref 3]
## Common Pitfall
Relying on sliding-scale leads to glucose swings. Transition to basal-bolus for steady control.
## Boards + Bedside Tie-In
Exams compare sliding-scale vs basal-bolus. Bedside: adjust doses daily based on intake.
## References
1. Umpierrez GE, et al. Randomized study of basal-bolus insulin therapy. Diabetes Care. 2007.
2. Teles F, et al. Hospital hyperglycemia management. Diabetol Metab Syndr. 2025.
3. ADA Standards of Care in Diabetes 2024. Diabetes Care. 2024.

---
# DKA vs HHS: Management Differences
## Clinical Setup
54-year-old woman with type 2 diabetes has glucose 760 mg/dL, pH 7.15, bicarb 10, ketones positive. Is this DKA or HHS?
## Teaching Objectives
- Distinguish diagnostic criteria for DKA vs HHS
- Outline differences in fluid and insulin management
## Teaching Points
1. DKA: Glucose ≥250, pH ≤7.3, Bicarb ≤15, Ketones positive. HHS: Glucose >600, pH >7.3, Bicarb >15, Osmolality >320 [Ref 1, 2].
2. Fluids: DKA needs rapid isotonic saline (15-20 mL/kg). HHS has profound deficit but requires gradual resuscitation to avoid cerebral edema [Ref 2].
3. Insulin: DKA uses 0.1 U/kg bolus then infusion. HHS infusion starts after fluids; add dextrose when glucose <300 [Ref 1, 2].
4. Resolution: DKA resolves when anion gap closes and pH >7.3. HHS resolves when osmolality normalizes and mental status clears [Ref 1].
## Key Numbers
- DKA: Glucose ≥250 + Acidosis + Ketones [Ref 1]
- HHS: Glucose >600 + Hyperosmolarity (>320) [Ref 2]
## Common Pitfall
Treating HHS like DKA with immediate insulin before fluids can cause circulatory collapse.
## Boards + Bedside Tie-In
Exams test recognition. Bedside: Confirm with VBG/BMP. Replenish K+ before insulin.
## References
1. Kitabchi AE, et al. Hyperglycemic crises. Diabetes Care. 2009.
2. Joint British Diabetes Societies. Management of HHS. Diabet Med. 2023.

---
# Thyroid Storm: Recognition and Management
## Clinical Setup
30-year-old woman with Graves disease presents with fever, agitation, HR 150, vomiting. TSH suppressed, Free T4 high. Diagnosis?
## Teaching Objectives
- Identify clinical features of thyroid storm
- Describe multi-modal management strategy
## Teaching Points
1. Thyroid storm: Life-threatening thyrotoxicosis with hyperthermia, tachycardia, agitation, GI symptoms [Ref 1].
2. Antithyroid drugs (PTU or Methimazole): Block synthesis. PTU also blocks T4->T3 conversion [Ref 1].
3. Iodine (Lugol's/SSKI): Give >1 hour AFTER antithyroid drugs to block release [Ref 2].
4. Beta-blockers (Propranolol): Control heart rate and block peripheral conversion [Ref 2].
5. Steroids (Hydrocortisone): Block T4->T3 conversion and treat relative adrenal insufficiency [Ref 2].
## Key Numbers
- PTU 600-1000 mg load. Methimazole 40 mg load [Ref 2]
- Give Iodine >1 hour after antithyroid drug [Ref 2]
## Common Pitfall
Giving iodine before antithyroid drugs can fuel hormone synthesis (Jod-Basedow). Always load PTU/Methimazole first.
## Boards + Bedside Tie-In
Boards ask sequence: Beta-blocker -> PTU -> Iodine -> Steroids.
## References
1. Idrose AM. Acute care for thyroid storm. Acute Med Surg. 2015.
2. Ross DS, et al. 2016 ATA Guidelines for Hyperthyroidism. Thyroid. 2016.

---
# Adrenal Insufficiency: Crisis Management
## Clinical Setup
35-year-old woman with Addison's disease has vomiting/hypotension. Na low, K high. Management?
## Teaching Objectives
- Recognize adrenal crisis features
- Implement acute treatment and stress dosing
## Teaching Points
1. Crisis: Hypotension refractory to fluids, abdominal pain, fever, hyponatremia, hyperkalemia [Ref 1].
2. Acute Rx: Hydrocortisone 100 mg IV bolus, then 200 mg/24hr. Aggressive fluids (D5NS) [Ref 2].
3. Stress Dosing: Minor illness = Double oral dose. Major stress = 100 mg IV bolus + maintenance [Ref 2].
4. Taper to maintenance after 24-72 hours [Ref 2].
## Key Numbers
- Hydrocortisone 100 mg IV bolus for crisis [Ref 2]
- Fluid resuscitation: 1L in first hour [Ref 1]
## Common Pitfall
Delaying steroids for confirmatory tests is fatal. Treat empirically immediately.
## Boards + Bedside Tie-In
Boards emphasize stress dosing rules. Clinically, ensure patients have emergency injectables.
## References
1. Dineen R, et al. Adrenal crisis. Ther Adv Endocrinol Metab. 2019.
2. Bornstein SR, et al. Diagnosis and treatment of primary adrenal insufficiency. J Clin Endocrinol Metab. 2016.

---
# Cellulitis vs Abscess
## Clinical Setup
37-year-old man with 4cm fluctuant tender thigh lesion. Afebrile. Management?
## Teaching Objectives
- Differentiate cellulitis from abscess
- Indications for I&D vs antibiotics
## Teaching Points
1. Cellulitis: Diffuse spreading infection (Strep/Staph). Treat with antibiotics. No I&D [Ref 1].
2. Abscess: Fluctuant pus collection. Primary treatment is Incision & Drainage (I&D) [Ref 1].
3. Antibiotics for Abscess: Generally NOT needed for uncomplicated cases. Indicated if: systemic signs, multiple lesions, extensive cellulitis, immunosuppression [Ref 1].
4. Follow-up: Keep wound open/packed. Antibiotics limited to 24-48 hrs if used [Ref 1].
## Key Numbers
- I&D is definitive for abscess [Ref 1]
- Antibiotics reserved for complicated abscesses (fever >38.5, HR >100) [Ref 1]
## Common Pitfall
Using antibiotics alone for an abscess leads to failure. It must be drained.
## Boards + Bedside Tie-In
Bedside: Palpate for fluctuance. If present, drain it.
## References
1. Stevens DL, et al. IDSA Guidelines for skin and soft tissue infections. Clin Infect Dis. 2014.

---
# Infective Endocarditis: Initial Steps
## Clinical Setup
64-year-old man with prosthetic valve has fever and new murmur. Workup?
## Teaching Objectives
- Appropriate blood culture collection
- Empiric antibiotic selection
## Teaching Points
1. Blood Cultures: 3 sets, separate sites, 30 mins apart BEFORE antibiotics [Ref 1, 2].
2. Imaging: TTE first. TEE is more sensitive, especially for prosthetic valves [Ref 1].
3. Empiric Rx (Native): Vancomycin + Ceftriaxone (covers Staph/Strep/Enterococcus) [Ref 2].
4. Empiric Rx (Prosthetic): Vancomycin + Gentamicin + Rifampin (Rifampin added after 3-5 days) [Ref 1].
5. Duration: 4-6 weeks (Native), 6+ weeks (Prosthetic) [Ref 1].
## Key Numbers
- 3 culture sets minimum [Ref 1]
- Duration 4-6 weeks [Ref 1]
## Common Pitfall
Starting antibiotics before cultures compromises diagnosis.
## Boards + Bedside Tie-In
Exams test culture timing and empiric regimens.
## References
1. Habib G, et al. 2015 ESC guidelines for infective endocarditis. Eur Heart J. 2015.
2. Baddour LM, et al. Infective endocarditis in adults. Circulation. 2015.

---
# Positive Blood Cultures: Approach
## Clinical Setup
Admitted for cellulitis. 1 of 4 blood culture bottles grows Coagulase-Negative Staph. Significance?
## Teaching Objectives
- Distinguish contamination from infection
- Identify organisms always requiring treatment
## Teaching Points
1. Contamination: Single bottle of skin flora (Coag-neg Staph, Bacillus, Cutibacterium) usually = contaminant [Ref 1].
2. True Infection: Multiple positive bottles, short time to positivity, concordant clinical signs [Ref 1].
3. Always Significant: S. aureus, Strep pneumo, Group A Strep, Pseudomonas, Candida, Gram-negatives [Ref 1].
4. S. aureus/Candida: Always treat. Echocardiogram required [Ref 2].
## Key Numbers
- Contamination rate target <3% [Ref 3]
- 1 positive bottle of Coag-neg Staph is usually contamination [Ref 1]
## Teaching Pearl
Never ignore S. aureus or Candida in blood, even 1 bottle.
## Boards + Bedside Tie-In
Bedside: Look at number of positive bottles and organism type.
## References
1. Chela HK, et al. Approach to positive blood cultures. Mo Med. 2019.
2. Mermel LA, et al. IDSA Guidelines for catheter-related infection. Clin Infect Dis. 2009.
`;

// --- DATA: WEEK 4 (GI & Hematology) ---
const WEEK_4_MARKDOWN = `
# Upper GI Bleeding: Risk Stratification and Initial Management
## Clinical Setup
A 65-year-old man with cirrhosis and chronic NSAID use presents with melena, tachycardia and hypotension. His hemoglobin is 6.8 g/dL after receiving fluids. What is the initial approach to management and how do you risk-stratify him?
## Teaching Objectives
- Recognize high-risk features and employ risk scores to stratify patients with upper GI bleeding.
- Apply a stepwise management plan including resuscitation, transfusion thresholds and timing of endoscopy.
## Teaching Points
1. Use the Glasgow-Blatchford Score to risk-stratify; scores 0-1 identify patients safe for early discharge, whereas higher scores prompt admission and urgent endoscopy [Ref 1].
2. Initial management involves airway protection, IV access, hemodynamic resuscitation and packed red blood cell transfusion when hemoglobin <7 g/dL, or <9 g/dL in those with cardiovascular disease or active ischemia [Ref 1][Ref 2].
3. Administer intravenous proton pump inhibitor and consider erythromycin infusion before endoscopy; perform upper endoscopy within 24 hours to diagnose and treat the source of bleeding [Ref 1].
4. A restrictive transfusion strategy (threshold <7 g/dL) improves survival and reduces rebleeding compared with liberal transfusion (threshold <9 g/dL) [Ref 2].
5. Review antiplatelet and anticoagulant therapies and reverse coagulopathy when appropriate; consult interventional radiology or surgery if endoscopic therapy fails [Ref 1].
## Key Numbers
- Glasgow-Blatchford Score 0-1: identifies low-risk patients who may be managed as outpatients [Ref 1].
- Hemoglobin <7 g/dL: transfusion threshold in most patients; target <9 g/dL for those with active ischemia or significant comorbidity [Ref 1][Ref 2].
- Restrictive transfusion trial: 95 % survival vs 91 % at six weeks for restrictive vs liberal strategies [Ref 2].
## Common Pitfall
Over-transfusion and aggressive fluid administration can increase portal pressure and risk of rebleeding; transfuse judiciously and stabilize hemodynamics before endoscopy [Ref 2].
## Boards + Bedside Tie-In
Examinations often ask for appropriate transfusion thresholds and timing of endoscopy; at the bedside, using risk scores and following a resuscitation-endoscopy-hemostasis framework improves outcomes and prevents unnecessary admissions.
## References
1. Laine L, Barkun AN, Saltzman JR, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116(5):899-917.
2. Villanueva C, Colomo A, Bosch A, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med. 2013;368(1):11-21.

---
# Lower GI Bleeding: Localization and Initial Management
## Clinical Setup
A 72-year-old woman taking a direct oral anticoagulant presents with maroon stools and mild hypotension. Her hemoglobin is 8.2 g/dL after initial fluids. After stabilization, what steps are needed to localize and manage her bleeding?
## Teaching Objectives
- Stabilize patients with lower GI bleeding and apply risk stratification tools to identify safe outpatient candidates.
- Implement diagnostic and therapeutic strategies including colonoscopy, imaging and reversal of anticoagulation.
## Teaching Points
1. Resuscitate with IV fluids, obtain type and cross and transfuse packed red blood cells when hemoglobin <7 g/dL or symptomatic anemia; reverse anticoagulants if clinically indicated [Ref 1].
2. Use the Oakland score to identify low-risk patients; scores ≤8 or ≤10 accurately predict those safe for discharge or outpatient colonoscopy [Ref 2].
3. Perform colonoscopy within 24-48 hours after adequate preparation; urgent colonoscopy offers no mortality benefit but may improve diagnostic yield [Ref 1][Ref 3].
4. If colonoscopy is nondiagnostic or the patient remains unstable, pursue CT angiography or radionuclide scanning; interventional radiology or surgery is reserved for ongoing bleeding despite endoscopic therapy [Ref 1].
5. Administer specific reversal agents for anticoagulants (vitamin K, prothrombin complex concentrate, or DOAC antidotes) when necessary to control bleeding [Ref 1].
## Key Numbers
- Oakland score ≤8: 98.4 % sensitivity for identifying patients suitable for discharge; ≤10: 96 % sensitivity for outpatient management [Ref 2].
- Hemoglobin <7 g/dL: transfusion threshold; consider threshold <8 g/dL in patients with cardiovascular disease [Ref 1].
- Early colonoscopy within 24 hours does not reduce mortality but facilitates diagnosis and therapy [Ref 1].
## Teaching Pearl
Administer a high-volume polyethylene glycol solution during resuscitation to achieve clear effluent; adequate bowel preparation improves visualization and therapeutic success during colonoscopy [Ref 1].
## Boards + Bedside Tie-In
Boards frequently test risk scores and timing of colonoscopy. Clinically, using the Oakland score and focusing on resuscitation and proper imaging prevents unnecessary admissions and optimizes resource utilization.
## References
1. Strate LL, Gralnek IM. ACG Clinical Guideline: Management of Patients With Acute Lower Gastrointestinal Bleeding. Am J Gastroenterol. 2016;111(4):459-474.
2. Oakland K, Jairath V. Advances in transfusion medicine: gastrointestinal bleeding. Transfus Med. 2018;28(2):132-139.
3. Oakland K, Jairath V, Uberoi R, et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology. Gut. 2019;68(5):776-789.

---
# Acute Pancreatitis: Severity and Management
## Clinical Setup
A 45-year-old man with gallstones presents with sudden severe epigastric pain radiating to the back and intractable vomiting. Serum lipase is 800 U/L. How should you assess the severity of his acute pancreatitis and manage him in the first 24 hours?
## Teaching Objectives
- Apply severity scoring systems to predict outcomes in acute pancreatitis.
- Implement evidence-based early management including fluid resuscitation, nutrition and etiology-specific therapy.
## Teaching Points
1. Diagnose acute pancreatitis when two of three criteria are met: characteristic abdominal pain, serum lipase or amylase ≥3 times the upper limit of normal and imaging findings; classify as mild, moderately severe or severe based on organ failure and complications [Ref 1].
2. The BISAP score (blood urea nitrogen >25 mg/dL, impaired mental status, SIRS, age >60 years, pleural effusion) predicts mortality; a score ≥3 has 56 % sensitivity and 91 % specificity for severe disease [Ref 2].
3. Early management includes aggressive isotonic fluid resuscitation (20 mL/kg bolus followed by 3 mL/kg/h), pain control with opioids and early enteral nutrition; lactated Ringer's solution may reduce systemic inflammation compared with normal saline [Ref 1].
4. Identify and treat the underlying cause: perform early endoscopic retrograde cholangiopancreatography for gallstone pancreatitis with cholangitis or persistent obstruction, and schedule cholecystectomy during the same admission [Ref 1].
5. Avoid prophylactic antibiotics and total parenteral nutrition unless infection or necrosis is documented; monitor for organ failure and consult surgery or critical care early in severe cases [Ref 1].
## Key Numbers
- BISAP score ≥3: indicates increased mortality and severe pancreatitis with 56 % sensitivity and 91 % specificity [Ref 2].
- Fluid resuscitation: 20 mL/kg bolus then 3 mL/kg/h for the first 24-48 hours; adjust based on urine output and hematocrit [Ref 1].
- Enteral feeding should begin within 24 hours when possible and is superior to parenteral nutrition [Ref 1].
## Common Pitfall
Routinely administering prophylactic antibiotics or delaying enteral feeding increases complications; initiate early nutrition and reserve antibiotics for proven infection or necrosis [Ref 1].
## Boards + Bedside Tie-In
Boards test the components of severity scores and early management steps. Clinically, stratifying severity and starting aggressive fluid resuscitation and early feeding reduce complications and mortality.
## References
1. Tenner S, Vege SS, Sheth SG, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol. 2024;119(3):419-437.
2. Gao W, Yang HX, Ma CE. The Value of BISAP Score for Predicting Mortality and Severity in Acute Pancreatitis: A Systematic Review and Meta-Analysis. PLoS One. 2015;10(6):e0130412.

---
# Small Bowel Obstruction: Conservative vs Surgical Management
## Clinical Setup
A 68-year-old man with a history of appendectomy presents with colicky abdominal pain, vomiting and abdominal distension. Abdominal radiographs show dilated small-bowel loops with air-fluid levels and no free air. How should his small-bowel obstruction be managed and when is surgery indicated?
## Teaching Objectives
- Differentiate patients who require conservative management from those needing surgery for small-bowel obstruction.
- Recognize clinical and imaging predictors of complicated obstruction.
## Teaching Points
1. Initial management for uncomplicated obstructions consists of intravenous fluid resuscitation, nasogastric decompression and bowel rest; administer broad-spectrum antibiotics in the presence of fever or leukocytosis [Ref 1].
2. Nonoperative management is successful for most partial obstructions; failure to resolve within 3-5 days or evidence of ischemia or perforation warrants surgical intervention [Ref 1].
3. Continuing conservative management beyond 48 hours does not decrease the need for surgery and is associated with increased morbidity [Ref 2].
4. Computed tomography predictors of need for surgery include free intraperitoneal fluid, mesenteric edema, absence of the small-bowel feces sign and a history of vomiting; together these findings have a sensitivity of 96 % and positive predictive value of 90 % for operative management [Ref 3].
5. Absolute indications for immediate surgery include peritonitis, strangulation, closed-loop obstruction and perforation; the classic dictum notes that the sun should not rise and set on a complete SBO [Ref 3].
## Key Numbers
- Conservative management success rate: approximately 65-80 %; failure to resolve after 48 hours increases morbidity [Ref 2].
- CT predictor combination yields 96 % sensitivity and 90 % positive predictive value for operative intervention [Ref 3].
- Timeframe for nonoperative trial: 3-5 days before considering surgery [Ref 1].
## Teaching Pearl
Water-soluble contrast studies may predict resolution and have therapeutic benefit; administering oral contrast via nasogastric tube can reduce time to resolution and guide surgical decision-making [Ref 1].
## Boards + Bedside Tie-In
Boards test recognition of imaging findings predicting strangulation or ischemia; clinically, timely surgical consultation and avoiding prolonged conservative management reduce complications and mortality.
## References
1. Millman CL, et al. Intestinal obstruction: evaluation and management. Am Fam Physician. 2018;98(6):362-370.
2. Chang PK, et al. Outcomes of prolonged nonoperative management of small-bowel obstruction.
3. Zielinski MD, Eftimoski M, et al. CT predictors of operative management for small-bowel obstruction. Ann Surg. 2010;252(4):??

---
# Acute Diarrhea: Infectious vs Non-Infectious
## Clinical Setup
A 30-year-old traveler returns from a developing country with abrupt onset of watery diarrhea, abdominal cramps and low-grade fever. He denies blood in the stools. How should his acute diarrhea be evaluated and when are antibiotics indicated?
## Teaching Objectives
- Distinguish between infectious and non-infectious causes of acute diarrhea and recognize indications for diagnostic testing.
- Implement evidence-based supportive care and judicious use of antibiotics and antidiarrheal agents.
## Teaching Points
1. Most cases of acute diarrhea are self-limited and require rehydration with oral rehydration solution containing salt and glucose; avoid high-sugar beverages and unnecessary dietary restrictions [Ref 2].
2. Stool cultures, ova and parasite testing and bacterial toxin assays are reserved for patients with severe illness (temperature ≥38.5 °C, bloody diarrhea, volume depletion), immunocompromised hosts or persistent symptoms; routine testing is unnecessary [Ref 1].
3. Empiric antibiotics are generally not recommended for immunocompetent adults with bloody diarrhea except in specific scenarios such as infants <3 months, suspected Shigella, severe disease or sepsis; avoid empiric therapy for enterohemorrhagic E. coli due to risk of hemolytic uremic syndrome [Ref 1].
4. For travel-associated diarrhea, classify severity: mild illness is tolerable and does not interfere with activities; moderate illness interferes with activities; severe illness causes incapacitation or includes dysentery. Mild cases require hydration ± loperamide; moderate cases may be treated with single-dose azithromycin; severe cases warrant antibiotics and close monitoring [Ref 2].
5. Antidiarrheal agents such as loperamide reduce stool frequency but should be avoided in bloody or febrile diarrhea; bismuth subsalicylate is an alternative when fever or blood is present [Ref 2][Ref 3].
## Key Numbers
- Oral rehydration therapy aims for 50-100 mL/kg over four hours in moderate dehydration, adjusting for ongoing losses [Ref 2].
- Azithromycin 1 g orally once is effective for moderate to severe traveler's diarrhea; fluoroquinolones are alternatives depending on region and resistance patterns [Ref 1].
- Definition of severe traveler's diarrhea: incapacitating or dysenteric disease that significantly interferes with planned activities [Ref 2].
## Common Pitfall
Empiric use of antibiotics or antidiarrheals in early illness may prolong shedding or precipitate complications; supportive care and risk-based testing are usually sufficient [Ref 1].
## Boards + Bedside Tie-In
Exam questions often test indications for stool cultures and empiric antibiotics. Clinically, focusing on rehydration, classifying travelers' diarrhea and exercising caution with antibiotics prevent unnecessary treatment and complications.
## References
1. Shane AL, Mody RK, Crump JA, et al. 2017 Infectious Diseases Society of America clinical practice guidelines for the diagnosis and management of infectious diarrhea. Clin Infect Dis. 2017;65(12):e45-e80.
2. Chua DY, Ong G, Tan CK, et al. Acute gastroenteritis in adults: a global update. Singapore Med J. 2025;66(3):??
3. Freedman DO, Wichmann O. Antidiarrheal agents for travel-related diarrhea.

---
# Cirrhosis: Major Complications Overview
## Clinical Setup
A 58-year-old man with chronic hepatitis C and alcohol use develops ascites, recurrent hepatic encephalopathy and esophageal varices. He asks about his prognosis and management of complications. How should his decompensated cirrhosis be managed?
## Teaching Objectives
- Identify the major complications of cirrhosis and provide evidence-based management strategies.
- Counsel patients on prognosis and indications for transplant referral.
## Teaching Points
1. Major complications include portal hypertensive bleeding (variceal hemorrhage), ascites, spontaneous bacterial peritonitis (SBP), hepatic encephalopathy (HE) and hepatorenal syndrome (HRS); their occurrence marks decompensation and warrants referral to a transplant center when the MELD score ≥15 or any complication occurs [Ref 1].
2. Prevent first variceal bleeding with nonselective beta-blockers (propranolol, nadolol, carvedilol) or endoscopic band ligation; screen for varices at diagnosis and every 1-2 years, repeating more often if varices are present [Ref 1].
3. Manage ascites with sodium restriction (<2 g/day), abstinence from alcohol and diuretics starting with spironolactone 100-200 mg daily; add furosemide (40 mg) maintaining a 100:40 ratio; large-volume paracentesis with albumin replacement (6-8 g/L removed) is indicated for tense or refractory ascites [Ref 1][Ref 2].
4. HE is treated with lactulose titrated to 2-3 soft stools/day and add-on rifaximin; lactulose reduces mortality (8.5 % vs 14 %) and recurrent HE (25.5 % vs 46.8 %) while combination therapy improves remission [Ref 3].
5. HRS type 1 (acute kidney injury) has a median survival <2 weeks; vasoconstrictor therapy with terlipressin plus albumin improves reversal (39 % vs 18 %) and serves as a bridge to liver transplantation [Ref 3].
## Key Numbers
- Median survival after onset: 0.92 years for HE and 1.1 years for ascites [Ref 3].
- Annual incidence among ascites patients: SBP 11 %, HRS 8 % [Ref 3].
- Combination diuretics resolve ascites in 76 % vs sequential initiation in 56 %; hyperkalemia occurs in 4 % vs 18 % [Ref 3].
- Beta-blockers reduce risk of decompensation or death (16 % vs 27 %) [Ref 3].
## Teaching Pearl
Vaccinate against hepatitis A and B, avoid hepatotoxic drugs and perform surveillance for hepatocellular carcinoma (ultrasound with alpha-fetoprotein every 6 months); early transplant referral improves survival [Ref 1].
## Boards + Bedside Tie-In
Boards emphasize recognition of decompensated cirrhosis and prophylactic therapies. Clinically, anticipating complications, monitoring for variceal bleeding and ascites and referring for transplant evaluation are critical to improving outcomes.
## References
1. Smith A, Baumgartner K, Bositis C. Cirrhosis: Diagnosis and Management. Am Fam Physician. 2019;100(12):759-770.
2. Khan S, Linganna M. Diagnosis and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome. Cleve Clin J Med. 2023;90(4):209-213.
3. Tapper EB, Parikh ND. Diagnosis and management of cirrhosis and its complications. JAMA. 2023;329(15):1499-1511.

---
# Hepatic Encephalopathy: Grading and Treatment
## Clinical Setup
A 62-year-old woman with cirrhosis presents with confusion and asterixis. She is oriented to person but not to time and place, with mild disorientation. How should you grade her hepatic encephalopathy and what is the optimal treatment?
## Teaching Objectives
- Apply the West Haven grading system to classify hepatic encephalopathy (HE).
- Implement pharmacologic and supportive management for HE and identify precipitants.
## Teaching Points
1. The West Haven criteria classify HE into four grades: grade I (trivial lack of attention, euphoria, sleep disturbance), grade II (disorientation, asterixis), grade III (marked confusion, somnolence) and grade IV (coma); minimal HE is grade 0 and along with grade I constitutes covert HE, whereas grades II-IV are overt HE [Ref 2].
2. Identify precipitating factors (such as infection, gastrointestinal bleeding, electrolyte disturbances, sedatives or dehydration) and treat them; exclude other causes of altered mental status [Ref 1].
3. First-line therapy is non-absorbable disaccharides (lactulose or lactitol); administer 25 mL orally every 1-2 hours until two soft bowel movements, then 15-45 mL three to four times daily to maintain 2-3 stools/day; avoid excessive dosing to prevent dehydration and hypokalemia [Ref 3].
4. Add rifaximin 550 mg orally twice daily to lactulose for secondary prophylaxis; combination therapy reduces recurrence and hospitalization compared with lactulose alone [Ref 3][Ref 4].
5. Patients with grade III or IV HE require airway protection and close monitoring; avoid sedatives, maintain protein intake (1.2-1.5 g/kg/day) and consider zinc or L-ornithine L-aspartate supplementation, though data are limited [Ref 1].
## Key Numbers
- West Haven grading: grade I (trivial lack of attention), grade II (disorientation/asterixis), grade III (somnolence/confusion), grade IV (coma) [Ref 2].
- Lactulose dosing: 25 mL every 1-2 hours until two bowel movements, then 15-45 mL three times daily; rectal dosing 300 mL in 1 L water every 6-8 hours for comatose patients [Ref 3].
- Rifaximin plus lactulose reduces recurrence of HE and hospitalizations compared with lactulose alone (91 % vs 74 % remission in a randomized trial) [Ref 4].
## Teaching Pearl
Protein restriction is unnecessary; maintain adequate protein intake (1.2-1.5 g/kg/day) to prevent muscle wasting, which helps clear ammonia via glutamine synthesis [Ref 1].
## Boards + Bedside Tie-In
Boards test recognition of covert versus overt HE and appropriate therapeutic steps. Clinically, promptly identifying precipitants, titrating lactulose correctly and adding rifaximin for secondary prophylaxis reduces recurrence and improves quality of life.
## References
1. Vilstrup H, Amodio P, Bajaj J, et al. Hepatic encephalopathy in chronic liver disease: 2014 practice guideline by the AASLD and EASL. Hepatology. 2014;60(2):715-735.
2. Ferenci P, Lockwood A, Mullen K, et al. Hepatic encephalopathy: definition, clinical grading and diagnostic principles. Drugs. 2019;79(1):5-17.
3. Diagnosis and management of hepatic encephalopathy. Hepatitis C Online. University of Washington; 2024.
4. Bass NM, Mullen KD, Sanyal A, et al. Rifaximin treatment in hepatic encephalopathy. N Engl J Med. 2010;362(12):1071-1081.

---
# Ascites Management and SBP Prophylaxis
## Clinical Setup
A 55-year-old man with cirrhosis presents with progressive abdominal distension and early satiety. Paracentesis reveals a low-protein ascitic fluid with a serum-ascites albumin gradient >1.1 g/dL. How should you manage his ascites and which patients require spontaneous bacterial peritonitis (SBP) prophylaxis?
## Teaching Objectives
- Implement a stepwise approach to ascites management and recognize indications for SBP prophylaxis.
- Optimize diuretic therapy and albumin replacement to prevent complications.
## Teaching Points
1. Perform diagnostic paracentesis on all patients with new or worsening ascites to determine etiology and rule out SBP; ascites signifies decompensated cirrhosis and mandates transplant evaluation [Ref 2].
2. First-line therapy includes sodium restriction (≤2 g/day), abstinence from alcohol and diuretics starting with spironolactone 100 mg plus furosemide 40 mg daily; titrate every 3-5 days up to a maximum of 400/160 mg maintaining a 100:40 ratio to prevent hyperkalemia [Ref 2][Ref 3].
3. Large-volume paracentesis (>5 L) requires albumin infusion 6-8 g per litre removed; albumin 1.5 g/kg on day 1 and 1 g/kg on day 3 is recommended when treating SBP with renal dysfunction [Ref 3].
4. SBP prophylaxis is indicated after an episode of SBP (secondary prophylaxis reduces recurrence from 68 % to 20 %) and in patients with ascitic protein <1.5 g/dL plus renal impairment (creatinine ≥1.2 mg/dL, BUN ≥25 mg/dL or sodium ≤130 mEq/L) or advanced liver disease (Child-Pugh ≥9 and bilirubin ≥3 mg/dL); daily norfloxacin 400 mg or trimethoprim-sulfamethoxazole 800/160 mg is recommended [Ref 1].
5. For gastrointestinal hemorrhage, a 7-day course of ceftriaxone 1 g/day or equivalent oral antibiotics reduces infection and mortality (43 % vs 15 %) [Ref 1]; fluid restriction (1-1.5 L/day) is reserved for severe hyponatremia (<125 mEq/L) [Ref 3].
## Key Numbers
- Maximum diuretic doses: spironolactone 400 mg/day and furosemide 160 mg/day with a 100:40 ratio [Ref 2][Ref 3].
- Albumin dosing: 6-8 g per litre removed during large-volume paracentesis; 1.5 g/kg day 1 and 1 g/kg day 3 for SBP with renal dysfunction [Ref 3].
- SBP prophylaxis reduces recurrence from 68 % to 20 %; GI hemorrhage prophylaxis reduces mortality from 43 % to 15 % [Ref 1].
## Common Pitfall
Delaying diagnostic paracentesis or unnecessary proton pump inhibitor use increases SBP risk; perform paracentesis promptly and discontinue PPIs unless clearly indicated [Ref 2].
## Boards + Bedside Tie-In
Boards emphasize sodium restriction, diuretic dosing ratios and indications for albumin and SBP prophylaxis. In practice, adherence to these protocols prevents hepatorenal syndrome and improves survival.
## References
1. Recognition and management of spontaneous bacterial peritonitis. Hepatitis C Online. University of Washington; 2024.
2. Khan S, Linganna M. Diagnosis and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome. Cleve Clin J Med. 2023;90(4):209-213.
3. European Association for the Study of the Liver. Guidelines on the management of ascites in cirrhosis. Gut. 2020;69(9):1687-1718.

---
# Acute Liver Failure: Recognition and Transplant Referral
## Clinical Setup
A 35-year-old woman presents two weeks after ingesting high doses of acetaminophen with jaundice, INR 2.3 and confusion. She has no history of liver disease. How do you recognize acute liver failure and when should you consider transplant referral?
## Teaching Objectives
- Define acute liver failure and implement early management strategies, including specific therapies.
- Recognize prognostic criteria and indications for urgent liver transplant referral.
## Teaching Points
1. Acute liver failure (ALF) is characterized by rapid hepatic injury with coagulopathy (INR ≥1.5) and any degree of hepatic encephalopathy in a patient without pre-existing liver disease, usually within <26 weeks of symptom onset [Ref 2][Ref 3].
2. Common etiologies include acetaminophen toxicity, viral hepatitis, autoimmune hepatitis, ischemia, Wilson disease and drug reactions; prompt identification of cause is essential for targeted therapy (e.g., N-acetylcysteine for acetaminophen) [Ref 1].
3. Initial management focuses on airway protection, hemodynamic stabilization, correction of hypoglycemia and prevention of cerebral edema; maintain serum sodium 140-150 mEq/L and treat intracranial hypertension with mannitol or hypertonic saline [Ref 2].
4. N-acetylcysteine is first-line therapy for acetaminophen-induced ALF and may improve outcomes in non-acetaminophen ALF; consider plasma exchange or molecular adsorbent recirculating systems in refractory cases [Ref 2].
5. Early transplant referral is critical; the King's College criteria (arterial pH <7.3 after resuscitation or INR >6.5, creatinine >3.4 mg/dL and grade III-IV encephalopathy) and high MELD scores indicate poor prognosis and need for transplantation [Ref 1].
## Key Numbers
- ALF definition: INR ≥1.5 plus hepatic encephalopathy within <26 weeks in absence of pre-existing liver disease [Ref 2].
- Serum ammonia >150-200 µmol/L is associated with cerebral edema and intracranial hypertension [Ref 2].
- King's College criteria: arterial pH <7.3 or (INR >6.5, creatinine >3.4 mg/dL and grade III-IV encephalopathy) predict mortality and need for transplant [Ref 1].
## Teaching Pearl
Early initiation of continuous renal replacement therapy in patients with grade ≥2 encephalopathy lowers ammonia levels and improves transplant-free survival; bridging therapies should not delay transfer to a transplant center [Ref 2].
## Boards + Bedside Tie-In
Boards test the definition of ALF and the criteria for transplant referral. Clinically, rapid recognition, prompt administration of specific antidotes and early communication with a transplant center are paramount.
## References
1. Polson J, Lee WM. AASLD position paper: the management of acute liver failure. Hepatology. 2005;41(5):1179-1197.
2. Acute Liver Failure 2024. SurgicalCriticalCare.net.
3. Bernal W, Wendon J. Acute liver failure. N Engl J Med. 2013;369(26):2525-2534.

---
# Alcohol Withdrawal: Inpatient Management
## Clinical Setup
A 45-year-old man with alcohol use disorder is hospitalized for cellulitis. Twelve hours after his last drink he develops tremors, agitation, diaphoresis and tachycardia. How should alcohol withdrawal syndrome (AWS) be managed in the hospital?
## Teaching Objectives
- Recognize risk factors and severity of alcohol withdrawal syndrome and implement monitoring tools.
- Apply evidence-based pharmacologic regimens and supportive care for AWS.
## Teaching Points
1. AWS develops in 1-5 % of hospitalized patients with chronic alcohol use, and 3-11 % progress to delirium tremens or seizures; risk factors include high daily intake, previous severe withdrawal and concomitant liver disease [Ref 1].
2. Use symptom-triggered therapy guided by standardized scales such as the Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar) or Brief Alcohol Withdrawal Scale (BAWS); scores direct benzodiazepine dosing and monitoring frequency [Ref 1][Ref 2][Ref 3].
3. Front-loading with long-acting benzodiazepines (diazepam 10-20 mg or chlordiazepoxide 50-100 mg every 1-2 hours) or intermediate-acting benzodiazepines (lorazepam 2-4 mg every 1-2 hours) rapidly controls severe withdrawal; lorazepam or oxazepam is preferred in liver disease due to minimal hepatic metabolism [Ref 1].
4. Fixed-dose regimens may use diazepam 20 mg every 2 hours until CIWA-Ar <10, with a ceiling of 60 mg/day or 125 mg/day for chlordiazepoxide; prophylactic lorazepam 2 mg IV prevents withdrawal seizures in high-risk patients [Ref 3].
5. Adjunctive measures include thiamine 100 mg IV or IM before glucose administration to prevent Wernicke encephalopathy, electrolyte repletion, and beta-blockers or alpha-2 agonists for autonomic symptoms; severe or refractory withdrawal may require phenobarbital or dexmedetomidine and ICU monitoring [Ref 1].
## Key Numbers
- BAWS score 3-5: treat with lorazepam 2 mg every 4 hours; score 6-8: lorazepam 4 mg every 2 hours until the score drops below target [Ref 1].
- Loading dose regimen: diazepam 20 mg every 2 hours until CIWA-Ar <10, with maximum 60 mg/day; lorazepam 4 mg may be substituted [Ref 3].
- Delirium tremens mortality can reach 15 % untreated; early benzodiazepine therapy reduces mortality to <5 % [Ref 1].
## Common Pitfall
Undertreating early withdrawal symptoms leads to seizures or delirium tremens; conversely, over-sedation with long-acting benzodiazepines in patients with liver disease can cause respiratory depression; choose agents and dosing based on liver function and severity [Ref 1][Ref 3].
## Boards + Bedside Tie-In
Boards test the use of withdrawal scales and appropriate benzodiazepine selection. Clinically, symptom-triggered regimens with thiamine supplementation prevent complications, while adjusting doses for hepatic impairment optimizes safety.
## References
1. Ratner JA, Blaney H, Rastegar DA. Management of alcohol withdrawal syndrome in patients with alcohol-associated liver disease. Hepatol Commun. 2024;8(2).
2. Sullivan JT, Sykora K, Schneiderman J, Naranjo CA, Sellers EM. Assessment of alcohol withdrawal: the CIWA-Ar scale. Br J Addict. 1989;84(11):1353-1357.
3. Myrick H, Malcolm R, Randall PK, et al. A double-blind trial of gabapentin versus lorazepam in the treatment of alcohol withdrawal. Alcohol Clin Exp Res. 2009;33(9):1582-1588.

---
# Approach to Inpatient Anemia
## Clinical Setup
A 68-year-old woman hospitalized for pneumonia is noted to have hemoglobin 7.5 g/dL. She denies overt bleeding but reports fatigue and dyspnea on exertion. How do you evaluate her anemia and decide on transfusion?
## Teaching Objectives
- Develop an algorithmic approach to evaluating inpatient anemia.
- Apply restrictive transfusion thresholds and manage underlying causes of anemia.
## Teaching Points
1. Anemia is defined as hemoglobin <13 g/dL in men and <12 g/dL in women; categorize by mean corpuscular volume (MCV): microcytic (<80 fL), normocytic (80-100 fL) and macrocytic (>100 fL) to guide evaluation [Ref 2][Ref 3].
2. Evaluate for acute blood loss, nutritional deficiency, chronic disease, hemolysis or bone marrow suppression; initial tests include CBC with indices, reticulocyte count, iron studies, vitamin B₁₂ and folate levels, creatinine, LDH, haptoglobin and peripheral smear [Ref 1].
3. Restrictive transfusion strategy: transfuse one unit of packed red blood cells when hemoglobin <7 g/dL in hemodynamically stable adults without active bleeding; use thresholds of 7.5 g/dL for cardiac surgery and 8 g/dL for orthopedic surgery or preexisting cardiovascular disease, and reassess after each unit [Ref 1].
4. Determine underlying cause: iron-deficiency anemia (microcytic) requires iron supplementation and evaluation for chronic blood loss; anemia of chronic disease is managed by treating the underlying condition; macrocytic anemia warrants investigation for vitamin B₁₂ or folate deficiency and review of medications [Ref 1].
5. Avoid transfusion-related complications by adhering to restrictive thresholds; unnecessary transfusions increase risk of volume overload, immunomodulation and infection; match ABO/Rh and transfuse slowly in the elderly or those with heart failure [Ref 1].
## Key Numbers
- Transfusion thresholds: <7 g/dL for general hospitalized patients; <7.5 g/dL for cardiac surgery; <8 g/dL for orthopedic surgery or patients with preexisting cardiovascular disease [Ref 1].
- MCV classification: microcytic <80 fL, normocytic 80-100 fL, macrocytic >100 fL [Ref 2].
- Anemia definitions: hemoglobin <13 g/dL in men and <12 g/dL in women [Ref 2].
## Teaching Pearl
Evaluate symptomatic anemia even when hemoglobin is above threshold; treat the underlying cause and always check medication history for bone marrow suppressants (e.g., chemotherapy, antimicrobials) [Ref 1].
## Boards + Bedside Tie-In
Boards test transfusion thresholds and evaluation algorithms. At bedside, using MCV to categorize anemia guides targeted testing, and adherence to restrictive transfusion strategies improves outcomes.
## References
1. Carson JL, Guyatt G, Heddle NM, et al. Red blood cell transfusion: a clinical practice guideline from the AABB. JAMA. 2023;330(3):277-288.
2. Rigaud L, Chiron C, Tavernier V, et al. Laboratory tests for investigating anemia: from an expert system to artificial intelligence. Pract Lab Med. 2024;34:??
3. World Health Organization. Haemoglobin concentrations for the diagnosis of anaemia and assessment of severity. World Health Organization; 2011.

---
# Thrombocytopenia: HIT vs Other Causes
## Clinical Setup
A 60-year-old man receiving unfractionated heparin for deep-vein thrombosis prophylaxis develops a platelet count drop from 250 000/µL to 90 000/µL on day 6 of therapy. He has no bleeding or thrombosis. How do you evaluate thrombocytopenia and differentiate heparin-induced thrombocytopenia (HIT) from other causes?
## Teaching Objectives
- Use the 4T score to assess pretest probability of HIT and initiate appropriate management.
- Differentiate HIT from immune thrombocytopenia and other causes of low platelets.
## Teaching Points
1. Evaluate timing of platelet fall, degree of thrombocytopenia, presence of thrombosis and other potential causes such as sepsis, medications, disseminated intravascular coagulation or pseudothrombocytopenia; confirm low counts with repeat CBC or peripheral smear [Ref 3].
2. The 4T score (thrombocytopenia, timing, thrombosis and other causes) assigns 0-2 points for each element; scores 0-3 indicate low probability, 4-5 intermediate and 6-8 high probability of HIT [Ref 1].
3. In low-probability cases (score ≤3), continue heparin and monitor; intermediate or high probability requires immediate discontinuation of all heparin (including flushes) and initiation of a non-heparin anticoagulant such as argatroban, bivalirudin, fondaparinux or a direct oral anticoagulant [Ref 2].
4. Perform enzyme-linked immunoassay for HIT antibodies; confirm positive results with a functional assay (serotonin release assay) when available; avoid warfarin in acute HIT and reverse vitamin K anticoagulation with 5-10 mg vitamin K; initiate warfarin only when platelet count recovers >150 000/µL [Ref 2].
5. Immune thrombocytopenia (ITP) is a diagnosis of exclusion; evaluate for secondary causes (HIV, HCV, systemic lupus erythematosus) and treat with corticosteroids (prednisone 1 mg/kg/day) or high-dose IVIG; platelet transfusion is reserved for life-threatening bleeding; fatal intracranial hemorrhage occurs in ~1 % of adults [Ref 3].
## Key Numbers
- 4T score categories: low 0-3, intermediate 4-5, high 6-8 [Ref 1].
- HIT occurs in up to 5 % of patients on unfractionated heparin and <1 % on low-molecular-weight heparin [Ref 2].
- Fatal intracranial hemorrhage in ITP occurs in ~1 % of adults and 0.4 % of children [Ref 3].
## Teaching Pearl
Always consider pseudothrombocytopenia due to platelet clumping in EDTA tubes; verify platelet count with a peripheral smear or citrate tube before initiating an extensive workup [Ref 3].
## Boards + Bedside Tie-In
Boards test the 4T score and management of HIT versus ITP. Clinically, early recognition and discontinuation of heparin with initiation of non-heparin anticoagulants prevents thrombosis and mortality.
## References
1. Cuker A, et al. American Society of Hematology 2018 guidelines for the management of heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.
2. Ng JY, DSouza M, Hutani F, Choi P. Management of Heparin-Induced Thrombocytopenia: A Contemporary Review. J Clin Med. 2024;13(16):4686.
3. Neunert C, Terrell DR, Arnold DM, et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv. 2019;3(23):3829-3866.

---
# Anticoagulation Reversal Strategies
## Clinical Setup
A 70-year-old woman on warfarin for atrial fibrillation presents with an intracranial hemorrhage and INR 4.5. How should her anticoagulation be reversed, and what reversal agents are available for direct oral anticoagulants (DOACs)?
## Teaching Objectives
- Summarize reversal strategies for vitamin K antagonists and direct oral anticoagulants.
- Highlight dosing and indications of specific antidotes and supportive measures.
## Teaching Points
1. In warfarin-associated major bleeding, discontinue warfarin and administer four-factor prothrombin complex concentrate (PCC) 50 IU/kg (maximum 5 000 IU) plus vitamin K 5-10 mg IV; PCC normalizes the INR rapidly and is preferred over fresh frozen plasma due to quicker reversal and lower volume [Ref 2].
2. Idarucizumab (Praxbind) is a humanized monoclonal antibody fragment that reverses dabigatran; administer 5 g IV (two 2.5 g boluses); it provides immediate and sustained reversal and is indicated for life-threatening bleeding or urgent surgery [Ref 3].
3. Andexanet alfa (Andexxa) is a recombinant modified factor Xa decoy protein that reverses factor Xa inhibitors (rivaroxaban, apixaban, edoxaban); dosing depends on the specific agent and time since last dose (e.g., 400 mg bolus followed by 4 mg/min infusion for low-dose reversal; 800 mg bolus followed by 8 mg/min infusion for high-dose reversal); due to cost and thrombosis risk, use is reserved for life-threatening bleeding [Ref 4].
4. Protamine sulfate antagonizes unfractionated heparin at a dose of 1 mg per 100 units of heparin and partially reverses low-molecular-weight heparin (1 mg per mg enoxaparin if given within 8 hours); maximum dose 50 mg; reversal of fondaparinux is not available [Ref 1].
5. In minor bleeding or when specific reversal agents are unavailable, consider activated prothrombin complex concentrates, activated charcoal (if ingestion within 2 hours), hemodialysis for dabigatran, and supportive measures; always restart anticoagulation when appropriate to balance thrombotic and bleeding risks [Ref 2].
## Key Numbers
- Vitamin K 5-10 mg IV plus four-factor PCC 50 IU/kg rapidly corrects warfarin-associated coagulopathy; fresh frozen plasma requires 15 mL/kg and has slower onset [Ref 2].
- Idarucizumab 5 g IV provides immediate dabigatran reversal with median time to hemostasis 11.4 hours [Ref 3].
- Andexanet alfa high-dose regimen (800 mg bolus + 960 mg infusion) vs low-dose (400 mg + 480 mg infusion) depending on last dose and time since DOAC ingestion [Ref 4].
## Teaching Pearl
Vitamin K alone reverses warfarin within 24 hours; for major bleeding or urgent surgery, combine with PCC. Avoid subcutaneous vitamin K due to erratic absorption and delayed effect [Ref 2].
## Boards + Bedside Tie-In
Boards test specific antidotes for DOACs and reversal protocols for warfarin. Clinically, having standardized protocols and understanding agent-specific reversal facilitates rapid management of life-threatening bleeding while minimizing thrombotic complications.
## References
1. Levy JH, Ageno W, Chan NC, et al. When and how to use protamine and other reversal agents. J Thromb Thrombolysis. 2016;41(3):379-398.
2. Keeling D, Baglin T, Tait C, et al. Guidelines on oral anticoagulation with warfarin - fourth edition. Br J Haematol. 2011;154(3):311-324.
3. Pollack CV Jr, Reilly PA, Eikelboom JW, et al. Idarucizumab for dabigatran reversal. N Engl J Med. 2015;373(6):511-520.
4. Connolly SJ, Crowther M, Eikelboom JW, et al. Andexanet alfa for acute major bleeding associated with factor Xa inhibitors. N Engl J Med. 2016;375(12):1131-1141.

---
# Tumor Lysis Syndrome: Prevention and Treatment
## Clinical Setup
A 22-year-old man with newly diagnosed high-grade lymphoma is scheduled to start chemotherapy. His white blood cell count is 120 000/µL and lactate dehydrogenase is markedly elevated. What is tumor lysis syndrome (TLS), and how can it be prevented and treated?
## Teaching Objectives
- Identify patients at risk for TLS and apply preventive strategies.
- Manage electrolyte derangements and implement specific therapies when TLS occurs.
## Teaching Points
1. TLS results from rapid lysis of malignant cells, releasing potassium, phosphate and nucleic acids that lead to hyperuricemia, hyperkalemia, hyperphosphatemia, hypocalcemia and acute kidney injury; it may occur spontaneously or after chemotherapy; high risk includes bulky tumors (e.g., Burkitt lymphoma), white blood cell count >100 000/µL, elevated LDH and pre-existing renal dysfunction [Ref 1].
2. Prevention begins with aggressive intravenous hydration (2-3 L/m²/day) to maintain urine output ≥100 mL/m²/hour; correct electrolyte abnormalities and avoid nephrotoxic drugs; monitor electrolytes, uric acid and renal function every 4-6 hours during high-risk periods [Ref 1].
3. Allopurinol 100-300 mg/day or 10 mg/kg/day orally inhibits xanthine oxidase and prevents new uric acid formation; rasburicase 0.2 mg/kg IV degrades existing uric acid to allantoin and is preferred for high-risk patients or when uric acid >8 mg/dL or creatinine is elevated; avoid rasburicase in glucose-6-phosphate dehydrogenase deficiency [Ref 2].
4. Treat hyperkalemia with intravenous calcium gluconate, insulin with glucose, β-agonists and loop diuretics; manage hyperphosphatemia with phosphate binders and dialysis; treat symptomatic hypocalcemia cautiously to prevent calcium-phosphate precipitation [Ref 3].
5. Risk stratification guides prophylaxis: low risk (standard hydration ± allopurinol), intermediate risk (vigorous hydration + allopurinol) and high risk (hydration + rasburicase); ongoing monitoring adjusts therapy accordingly [Ref 2].
## Key Numbers
- Cairo-Bishop laboratory TLS criteria include uric acid ≥8 mg/dL, potassium ≥6 mEq/L, phosphate ≥4.5 mg/dL and calcium ≤7 mg/dL or a 25 % change from baseline within three days of therapy [Ref 1].
- TLS occurs in 3-5 % of patients with hematologic malignancies; mortality approaches 20 % if untreated [Ref 1].
- Rasburicase 0.2 mg/kg IV reduces uric acid within four hours and prevents need for dialysis; allopurinol prevents new uric acid formation but does not lower existing uric acid [Ref 2].
## Teaching Pearl
Urine alkalinization is no longer recommended for TLS prevention because it promotes calcium-phosphate precipitation; focus instead on hydration and uric acid control [Ref 2].
## Boards + Bedside Tie-In
Boards require knowledge of Cairo-Bishop criteria and prophylactic measures. Clinically, early identification of high-risk patients and aggressive prophylaxis with hydration and uric acid-lowering therapy prevent acute kidney injury and life-threatening electrolyte disorders.
## References
1. Howard SC, Jones DP, Pui CH. The tumor lysis syndrome. N Engl J Med. 2011;364(19):1844-1854.
2. Jones GL, Will A, Jackson GH, et al. Guidelines for the management of tumour lysis syndrome in adults and children with haematological malignancies on behalf of the British Committee for Standards in Haematology. Br J Haematol. 2015;169(5):661-671.
3. Cairo MS, Bishop M. Tumour lysis syndrome: new therapeutic strategies and classification. Br J Haematol. 2004;127(1):3-11.

---
# Neutropenic Fever: Initial Management
## Clinical Setup
A 55-year-old woman undergoing chemotherapy for breast cancer develops a temperature of 38.4 °C and an absolute neutrophil count (ANC) of 400 cells/µL. She is hemodynamically stable. What is the initial management of neutropenic fever?
## Teaching Objectives
- Recognize the diagnostic criteria for neutropenic fever and perform immediate evaluation.
- Initiate empiric broad-spectrum antibiotics promptly and stratify patients for inpatient versus outpatient care.
## Teaching Points
1. Neutropenic fever is defined as a single oral temperature ≥38.3 °C or a sustained temperature ≥38.0 °C for at least one hour in a patient with neutropenia (ANC <500 cells/µL or expected to decline <500 within 48 hours); it is an oncologic emergency requiring prompt treatment [Ref 1].
2. Conduct a rapid assessment: obtain two sets of blood cultures (from peripheral and central lines), urine and other cultures as indicated, and perform a focused physical examination and chest imaging if respiratory symptoms are present; do not delay antibiotics for culture collection [Ref 1].
3. Administer empiric broad-spectrum IV antibiotics within 60 minutes; options include cefepime 2 g every 8 hours, piperacillin-tazobactam 4.5 g every 6 hours or meropenem 1 g every 8 hours; add vancomycin only for suspected catheter-related infection, skin infection, pneumonia or hemodynamic instability [Ref 1].
4. Use the Multinational Association for Supportive Care in Cancer (MASCC) score or Clinical Index of Stable Febrile Neutropenia (CISNE) to stratify risk; low-risk patients (MASCC score ≥21) with stable vital signs and no comorbidities may receive oral antibiotics (ciprofloxacin plus amoxicillin-clavulanate) and outpatient management; high-risk patients require inpatient IV therapy and daily monitoring [Ref 2] [Ref 3].
5. Continue empiric antibiotics until neutrophil recovery or documented resolution of infection; if fever persists for >4-7 days and neutropenia is prolonged, initiate empiric antifungal therapy; administer granulocyte colony-stimulating factor only in selected high-risk cases [Ref 1].
## Key Numbers
- Fever definition: ≥38.3 °C once or ≥38.0 °C sustained for one hour; neutropenia defined as ANC <500 cells/µL or expected to fall below 500 within 48 hours [Ref 1].
- Antibiotics should be administered within 60 minutes of fever detection; delays increase mortality [Ref 1].
- MASCC score ≥21 identifies low-risk patients with <5 % risk of complications and eligibility for outpatient management [Ref 2].
## Teaching Pearl
Avoid digital rectal examinations and urinary catheters in neutropenic patients due to risk of mucosal injury and bacteremia; promptly remove indwelling catheters if infection is suspected [Ref 1].
## Boards + Bedside Tie-In
Boards emphasize the criteria for febrile neutropenia and early empiric antibiotic therapy. Clinically, timely initiation of broad-spectrum antibiotics and appropriate risk stratification are critical for survival.
## References
1. Freifeld AG, Bow EJ, Sepkowitz KA, et al. Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer: 2010 update by the Infectious Diseases Society of America. Clin Infect Dis. 2011;52(4):e56-e93.
2. Klastersky J, de Naurois J, Rolston K, et al. Management of febrile neutropaenia: 2016 guidelines from the European Society for Medical Oncology (ESMO). Ann Oncol. 2016;27(suppl 5):v111-v118.
3. Taplitz RA, Kennedy EB, Bow EJ, et al. Outpatient management of fever and neutropenia in adults treated for malignancy: ASCO and IDSA guideline update. J Clin Oncol. 2018;36(14):1443-1453.
`;

// --- DATA: WEEK 5 (General Hospital Medicine) ---
const WEEK_5_MARKDOWN = `
# Managing Severe Hyperkalemia
## Clinical Setup
A 68-year-old man with chronic kidney disease stage IV on lisinopril and spironolactone presents to the emergency department with a serum potassium of 7.2 mEq/L. He is asymptomatic but his electrocardiogram demonstrates peaked T-waves without QRS prolongation. What is the appropriate management strategy?
## Teaching Objectives
- Recognize when hyperkalemia requires emergent therapy
- Implement the three-step approach to stabilize, shift, and remove potassium
## Teaching Points
1. Severe hyperkalemia (K⁺ >6.0 mEq/L or any ECG change) requires immediate treatment. Management occurs in three steps: stabilize the cardiac membrane, shift potassium intracellularly, and remove total body potassium. [Ref 1]
2. Stabilize: Administer calcium gluconate 1-2 g IV over 2-3 minutes. Effects begin in 1-3 minutes and last 30-60 minutes. [Ref 1]
3. Shift: Give 10 units of regular insulin IV with 25 g of dextrose; expect a 0.5-1.2 mEq/L decrease in 15-30 minutes. Nebulized albuterol 10-20 mg offers an additive reduction. [Ref 1]
4. Remove: Definitive removal requires enhancing renal excretion (loop diuretics) or extracorporeal removal (dialysis). Potassium binders (patiromer, ZS-9) are safer than Kayexalate but act slowly. [Ref 1, Ref 2]
5. In crush syndrome or rhabdomyolysis, aggressive isotonic fluid resuscitation helps prevent acute kidney injury. [Ref 2]
## Key Numbers
- Potassium >6.0 mEq/L or any ECG change: emergent therapy. K⁺ >6.5 mEq/L with ECG changes is a medical emergency. [Ref 1]
- Insulin/Dextrose reduces K by ~0.5-1.2 mEq/L within 15-30 mins. [Ref 1]
- Urine output target 200-300 mL/h in crush-related hyperkalemia. [Ref 2]
## Common Pitfall
Relying on sodium polystyrene sulfonate (Kayexalate) for acute hyperkalemia is problematic due to slow onset and risk of intestinal necrosis. Use insulin/glucose and calcium for immediate stabilization. [Ref 1]
## Boards + Bedside Tie-In
Examination questions often test recognition of ECG changes and which therapies stabilize membranes versus lower serum potassium. At the bedside, apply the sequence: Stabilize (Ca), Shift (Insulin/Albuterol), Remove (Lasix/Dialysis).
## References
1. Lindner G, Burdmann EA, Clase CM, et al. Acute hyperkalemia in the emergency department. Eur J Emerg Med. 2020;27(5):329-337.
2. Abu-Zidan FM, Jawas A, Saleh M, et al. Surgical and critical care management of earthquake musculoskeletal injuries. Turk J Emerg Med. 2024;24(1):44-55.

---
# Sepsis: Recognition and the First Three Hours
## Clinical Setup
A 75-year-old man with diabetes and COPD presents with fever, confusion, tachypnea, hypotension (86/50 mm Hg) and lactate of 4.2 mmol/L. Blood cultures are pending. What interventions should be prioritized during the first three hours?
## Teaching Objectives
- Identify sepsis and initiate early goal-directed resuscitation
- Balance fluid resuscitation with avoidance of fluid overload
## Teaching Points
1. Sepsis is life-threatening organ dysfunction caused by a dysregulated host response to infection. Hypotension or elevated lactate signals sepsis-induced hypoperfusion. [Ref 1]
2. Early broad-spectrum antibiotics improve survival. Administer empiric therapy as soon as possible after obtaining cultures. [Ref 1]
3. Fluid resuscitation: Guidelines recommend 30 mL/kg of isotonic crystalloid for hypotension or lactate ≥4 mmol/L. Reassess volume status frequently. [Ref 1, Ref 2]
4. Target a mean arterial pressure (MAP) of at least 65 mm Hg. If hypotension persists despite adequate fluids, initiate vasopressors (norepinephrine is first-line). [Ref 1]
5. Concurrent tasks: obtain blood cultures before antibiotics, identify source (imaging), and control it (drainage). [Ref 1]
## Key Numbers
- 30 mL/kg isotonic crystalloid: recommended initial bolus. [Ref 1]
- MAP ≥65 mm Hg: target after fluid resuscitation. [Ref 1]
- Positive fluid balance is associated with increased mortality; judicious management is key. [Ref 2]
## Common Pitfall
Over-resuscitation with fluids without reassessment can lead to pulmonary edema. Use dynamic indices (pulse pressure variation, passive leg raise) to guide further fluids. [Ref 2]
## Boards + Bedside Tie-In
Board questions emphasize the sepsis bundle (fluids, antibiotics, lactate). Clinically, the challenge is balancing aggressive resuscitation with fluid overload risk.
## References
1. Jozwiak M, Hamzaoui O, Georger J, et al. Fluid resuscitation during early sepsis. Minerva Anestesiol. 2018;84(8):987-992.
2. Tigabu BM, Davari M, Gohari B, et al. Fluid volume, fluid balance and patient outcome in severe sepsis. J Crit Care. 2018;48:153-159.

---
# Shock: Classification and Initial Approach
## Clinical Setup
A 63-year-old man presents with chest pain, diaphoresis and blood pressure 70/40 mm Hg. He is tachycardic and cool to the touch. The team must determine the type of shock and initiate appropriate therapy. How should he be evaluated and managed?
## Teaching Objectives
- Differentiate the major classes of shock and their pathophysiology
- Apply an algorithmic initial approach tailored to the underlying type
## Teaching Points
1. Shock is inadequate tissue perfusion. Classes: Hypovolemic (volume loss), Cardiogenic (pump failure), Distributive (vasodilation), and Obstructive (impedance to flow). [Ref 2]
2. Hypovolemic shock: Hemorrhage or fluid losses. Focus on rapid control of bleeding and volume replacement. [Ref 2]
3. Cardiogenic shock: Pump failure (MI, HF). Low cardiac output, high filling pressures. Cautious fluids, vasopressors (norepinephrine), inotropes (dobutamine), and reperfusion. [Ref 1]
4. Distributive shock: Sepsis/anaphylaxis. Vasodilation, high cardiac output. Aggressive fluids, vasopressors. [Ref 2]
5. Obstructive shock: Tension pneumothorax, tamponade, PE. Relieve obstruction (needle decompression, drain, thrombolytics). [Ref 2]
## Key Numbers
- Shock definition: Systolic BP <90 mm Hg or MAP <65 mm Hg with signs of hypoperfusion. [Ref 3]
- Cardiogenic shock mortality >40 %. [Ref 1]
- Distributive shock often presents with warm extremities and widened pulse pressure early. [Ref 1]
## Teaching Pearl
Use bedside ultrasound (POCUS) to differentiate. "Venous tank" view (IVC) evaluates volume. Cardiac views detect tamponade, RV dilation (PE), or systolic dysfunction. [Ref 1]
## Boards + Bedside Tie-In
On exams, classification of shock is frequently tested. At the bedside, rapid recognition prevents reflexive fluid administration in cardiogenic shock.
## References
1. Sarma D, Jentzer JC. Cardiogenic Shock: Pathogenesis, Classification, and Management. Crit Care Clin. 2024;40(1):37-56.
2. Kislitsina ON, Rich JD, Gulati R, et al. Shock - Classification and Pathophysiological Principles. Curr Cardiol Rev. 2019;15(2):102-113.
3. Patel S, Holden K, Chang M, et al. Shock. Crit Care Nurs Q. 2022;45(3):225-232.

---
# Acute Altered Mental Status: Structured Approach
## Clinical Setup
A 55-year-old man is found unresponsive. History of alcoholism and diabetes. Vitals: HR 90, BP 100/60, RR 10, SpO2 89%. What is the systematic approach?
## Teaching Objectives
- Employ a structured evaluation algorithm for acute altered mental status
- Recognize high-yield reversible causes and implement timely interventions
## Teaching Points
1. ABCs: Airway, Breathing, Circulation. Oxygen, IV access. Check glucose (give D50 if low) and consider naloxone. [Ref 2]
2. Diagnostic mnemonic "AEIOU TIPS": Alcohol, Endocrine/Electrolytes, Infection, Opiates/Oxygen, Uremia, Trauma, Insulin, Psychosis/Poisoning, Stroke/Seizures. [Ref 2]
3. Hyperosmolar hyperglycemic state (HHS): Glucose >600 mg/dL, Osmolality >320. Aggressive fluids, insulin, electrolyte correction. [Ref 3]
4. Delirium: Common (15-50% of inpatients). Identify precipitants (infection, meds). Nonpharmacologic strategies first. [Ref 1]
5. Wernicke encephalopathy: Triad of encephalopathy, oculomotor dysfunction, ataxia. Thiamine 200 mg IV TID before glucose. [Ref 4]
## Key Numbers
- Delirium affects 15-50% of hospitalized older adults. [Ref 1]
- HHS: Glucose >600 mg/dL, Osmolality >320 mOsm/kg. [Ref 3]
- Wernicke: Thiamine 200 mg IV TID. [Ref 4]
## Teaching Pearl
Always give thiamine before glucose in at-risk patients (malnourished, alcohol use) to prevent precipitating Wernicke encephalopathy. [Ref 4]
## Boards + Bedside Tie-In
Board scenarios require immediate actions: check glucose, naloxone, airway. At the bedside, a structured algorithm prevents missing reversible causes.
## References
1. Mattison MLP. Delirium. Ann Intern Med. 2020;173(7):ITC49-ITC64.
2. Erkkinen MG, Berkowitz AL. A Clinical Approach to Diagnosing Encephalopathy. Am J Med. 2019;132(10):1142-1147.
3. Lovegrove SS, Dubbs SB. Hyperosmolar Hyperglycemic State. Emerg Med Clin North Am. 2023;41(4):687-696.
4. Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis of Wernicke encephalopathy. Eur J Neurol. 2010;17(12):1408-1418.

---
# The Crashing Patient: First Five Minutes
## Clinical Setup
A 65-year-old inpatient becomes unresponsive and bradycardic. Telemetry shows asystole. What should occur in the first five minutes?
## Teaching Objectives
- Execute a structured approach emphasizing airway, breathing and circulation
- Identify reversible causes and prioritize interventions without delay
## Teaching Points
1. Activate emergency response. Pulseless? Begin high-quality chest compressions (100-120/min, 5-6 cm depth). Minimize interruptions. [Ref 1]
2. Airway/Breathing: Bag-valve-mask with 100% O2. Intubation should not delay compressions. [Ref 1]
3. Defibrillation: Check rhythm. Shockable (VF/VT)? Shock 200J. Non-shockable (Asystole/PEA)? Epinephrine 1 mg IV q3-5 min. [Ref 1]
4. Reversible causes (Hs and Ts): Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/hyperkalemia, Hypothermia, Tension pneumo, Tamponade, Toxins, Thrombosis, Trauma. [Ref 2]
5. Assign roles: Compressor, Airway, Meds, Recorder/Team Leader. [Ref 2]
## Key Numbers
- Compression rate: 100-120/min. [Ref 1]
- Epinephrine: 1 mg IV q3-5 min. [Ref 1]
- Hs and Ts: Rapid checklist for reversible causes. [Ref 2]
## Common Pitfall
Delaying compressions for airway or rhythm analysis reduces survival. Prioritize uninterrupted compressions. Limit pulse checks to <10 seconds. [Ref 1]
## Boards + Bedside Tie-In
Boards test algorithms. Bedside requires teamwork, clear roles, and running the Hs and Ts while performing high-quality CPR.
## References
1. American Heart Association. Highlights of the 2020 AHA Guidelines for CPR and ECC. 2020.
2. EMCrit/Internet Book of Critical Care. Approach to the Crashing Patient. 2024.

---
# Approach to Inpatient Hyponatremia
## Clinical Setup
A 68-year-old man admitted for pneumonia has sodium of 124 mEq/L (down from 138). He is euvolemic. How should this be evaluated?
## Teaching Objectives
- Apply a stepwise algorithm using volume status, serum osmolality and urine studies
- Avoid complications by adhering to safe correction thresholds
## Teaching Points
1. Confirm hypotonicity (Osm <280). Assess volume status. Obtain Urine Osm and Urine Na. [Ref 1]
2. Hypovolemic (High Urine Osm, Low Urine Na): Volume depletion. Treat with isotonic saline. [Ref 1]
3. Euvolemic (High Urine Osm, High Urine Na): SIADH. Fluid restriction. [Ref 1]
4. Hypervolemic (Edema, Ascites): HF, Cirrhosis. Fluid/Sodium restriction, diuretics. [Ref 2]
5. Correction: Max 8-10 mEq/L in 24 hrs (4-6 mEq/L if high risk) to prevent osmotic demyelination. Severe symptoms (seizures)? Hypertonic saline 100 mL bolus. [Ref 1]
## Key Numbers
- Correction limit: 8-10 mEq/L per 24 hrs. [Ref 1]
- Hypertonic saline: 100 mL 3% NaCl bolus for severe symptoms. [Ref 1]
- Urine Osm >100 mOsm/kg suggests impaired water excretion (e.g. SIADH). [Ref 1]
## Common Pitfall
Obtaining urine studies after starting fluids obscures diagnosis. Collect Urine Osm/Na before fluids. [Ref 1]
## Boards + Bedside Tie-In
Boards ask for diagnosis based on urine studies. Bedside: if uncertain volume status, a small trial of isotonic saline can distinguish hypovolemic (Na improves) from SIADH (Na worsens).
## References
1. Kugler JP, Hustead T. Hyponatremia and hypernatremia in the elderly. Am Fam Physician. 2000;61(12):3623-3630.
2. Orman ES, Fortune BE, Vilar G, et al. AGA Clinical Practice Update on Management of Hyponatremia in Cirrhosis. Gastroenterology. 2025.

---
# Community-Acquired Pneumonia: Severity and Antibiotics
## Clinical Setup
A 45-year-old man presents with fever, productive cough, and confusion. RR 32, BP 88/55, SpO2 89%. How to guide management?
## Teaching Objectives
- Utilize severity scoring systems to determine need for hospitalization
- Select empiric antibiotics based on severity
## Teaching Points
1. CURB-65: Confusion, Urea >20 mg/dL, RR ≥30, BP <90/60, Age ≥65. Score 0-1 (Outpatient), 2 (Inpatient), ≥3 (ICU). [Ref 3]
2. PSI (Pneumonia Severity Index) is also used. Classes I-II outpatient, IV-V inpatient. [Ref 1]
3. Outpatient Rx: Amoxicillin or Doxycycline (healthy). Amox/Clav + Azithro OR Levofloxacin (comorbidities). [Ref 1]
4. Inpatient (Non-ICU): Ceftriaxone + Azithromycin OR Levofloxacin. [Ref 1]
5. ICU: Ceftriaxone + Azithro/Fluoroquinolone. Add Vancomycin for MRSA, Zosyn for Pseudomonas if risk factors present. [Ref 3]
## Key Numbers
- CURB-65 ≥3: Consider ICU. [Ref 3]
- Treatment duration: 5-7 days if stable. [Ref 1]
- Antibiotic timing: Within 4 hours. [Ref 1]
## Common Pitfall
Delaying antibiotics for imaging/cultures increases mortality. Start empiric therapy promptly. [Ref 1]
## Boards + Bedside Tie-In
Memorize CURB-65. Clinically, early scoring aids triage. Know your local antibiogram.
## References
1. Lanks CW, Musani AI, Hsia DW. Community-acquired Pneumonia. Med Clin North Am. 2019;103(3):487-501.
2. Rider AC, Frazee BW. Community-Acquired Pneumonia. Emerg Med Clin North Am. 2018;36(4):665-683.
3. Martin-Loeches I, Garduno A, Waterer G, et al. Choosing antibiotic therapy for severe CAP. Curr Opin Infect Dis. 2022.

---
# DVT and PE: Risk Stratification
## Clinical Setup
A 55-year-old woman with pleuritic chest pain, leg swelling, and recent knee surgery. BP stable. How to stratify risk?
## Teaching Objectives
- Apply clinical prediction rules (Wells, Geneva)
- Determine inpatient vs outpatient management
## Teaching Points
1. DVT: Wells Score. ≥2 is moderate/high risk -> Ultrasound. ≤1 + negative D-dimer -> Rules out. [Ref 3]
2. PE: Wells Score. >4 high probability -> CT Angio. ≤4 + negative D-dimer -> Rules out. PERC rule can rule out very low risk. [Ref 1]
3. Severity: sPESI score. 0 points = Low risk (<1% mortality), consider outpatient. ≥1 point = Inpatient. [Ref 6]
4. High risk features: RV dysfunction, elevated troponin, hypotension. May need thrombolysis. [Ref 6]
5. Prophylaxis: LMWH or Heparin reduces VTE by ~60% in inpatients. [Ref 7]
## Key Numbers
- Wells DVT ≥2: Ultrasound. [Ref 3]
- sPESI 0: <1% mortality (Outpatient candidate). [Ref 6]
- Prophylaxis reduces VTE by 60%. [Ref 7]
## Common Pitfall
Ordering CT in very low risk patients (unnecessary radiation). Failing to recognize high risk features in stable patients (RV strain). [Ref 1]
## Boards + Bedside Tie-In
Exams test "Next Step" (D-dimer vs CT). Bedside: Use Wells and sPESI to guide workup and disposition.
## References
1. Giordano NJ, Jansson PS, Young MN, et al. Epidemiology of Pulmonary Embolism. Tech Vasc Interv Radiol. 2017.
2. Wenger N, Sebastian T, Murugan R, et al. PE and DVT. Thromb Res. 2021.
3. Lopez JA, Kearon C, Lee AY. Deep venous thrombosis. Hematology Am Soc Hematol Educ Program. 2004.
6. Szymanski K, Weber C, Szamosi A, et al. VTE for the hospitalist. Postgrad Med. 2025.
`;

// --- MAIN APP COMPONENT ---

export default function MicroScriptApp() {
  const [activeWeek, setActiveWeek] = useState('Week 1');
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Parse Markdown Content
  const parseMarkdown = (markdown) => {
    if (!markdown) return [];
    
    // Split by main headers (# Title)
    const topicsRaw = markdown.split(/^# /m).filter(Boolean);
    
    return topicsRaw.map(topicRaw => {
      const lines = topicRaw.split('\n');
      const title = lines[0].trim();
      const content = lines.slice(1).join('\n');
      
      // Parse Sections
      const sections = {};
      const sectionSplit = content.split(/^## /m).filter(Boolean);
      
      sectionSplit.forEach(sec => {
        const secLines = sec.split('\n');
        const secTitle = secLines[0].trim();
        const secContent = secLines.slice(1).join('\n').trim();
        sections[secTitle] = secContent;
      });

      return {
        title,
        ...sections
      };
    });
  };

  const week1Data = useMemo(() => parseMarkdown(WEEK_1_MARKDOWN), []);
  const week2Data = useMemo(() => parseMarkdown(WEEK_2_MARKDOWN), []);
  const week3Data = useMemo(() => parseMarkdown(WEEK_3_MARKDOWN), []);
  const week4Data = useMemo(() => parseMarkdown(WEEK_4_MARKDOWN), []);
  const week5Data = useMemo(() => parseMarkdown(WEEK_5_MARKDOWN), []);
  
  // Combine data for search and navigation
  const allWeeks = {
    'Week 1': { title: 'Cardiology', data: week1Data, icon: <Heart className="w-4 h-4" /> },
    'Week 2': { title: 'Pulmonology & Renal', data: week2Data, icon: <Activity className="w-4 h-4" /> },
    'Week 3': { title: 'Endocrinology & ID', data: week3Data, icon: <Thermometer className="w-4 h-4" /> },
    'Week 4': { title: 'GI & Hematology', data: week4Data, icon: <Stethoscope className="w-4 h-4" /> },
    'Week 5': { title: 'General Hospital Med', data: week5Data, icon: <FileText className="w-4 h-4" /> },
  };

  // Filter topics based on search
  const currentWeekTopics = allWeeks[activeWeek]?.data || [];
  
  const filteredTopics = currentWeekTopics.filter(topic => 
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const activeTopic = filteredTopics[activeTopicIndex];

  // --- RENDERERS FOR SPECIFIC SECTIONS ---

  const renderClinicalSetup = (text) => (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg shadow-sm">
      <div className="flex items-center mb-2 text-blue-700 font-bold uppercase text-xs tracking-wider">
        <Stethoscope className="w-4 h-4 mr-2" />
        Clinical Setup
      </div>
      <p className="text-gray-800 leading-relaxed text-sm md:text-base">{text}</p>
    </div>
  );

  const renderListSection = (text, type = 'bullet') => {
    if (!text) return null;
    const items = text.split(/\n(?:- |\d+\. )/).filter(item => item.trim().length > 0);
    
    return (
      <ul className="space-y-3 mb-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-gray-700 text-sm md:text-base">
            <span className={`flex-shrink-0 mt-1 mr-3 ${type === 'check' ? 'text-green-500' : 'text-indigo-500'}`}>
              {type === 'check' ? <CheckCircle className="w-5 h-5" /> : <span className="font-bold">{idx + 1}.</span>}
            </span>
            <span dangerouslySetInnerHTML={{ __html: item.replace(/\[Ref \d+\]/g, '') }} />
          </li>
        ))}
      </ul>
    );
  };

  const renderKeyNumbers = (text) => {
    if (!text) return null;
    const items = text.split(/\n- /).filter(item => item.trim().length > 0);
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start">
              <Activity className="w-5 h-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-slate-700 text-sm font-medium">{item.replace(/\[Ref \d+\]/g, '')}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCallout = (title, text, type) => {
    if (!text) return null;
    const colors = {
      pitfall: 'bg-amber-50 border-amber-400 text-amber-900',
      pearl: 'bg-emerald-50 border-emerald-400 text-emerald-900',
      boards: 'bg-indigo-50 border-indigo-400 text-indigo-900'
    };
    const icons = {
      pitfall: <AlertTriangle className="w-5 h-5 mr-2" />,
      pearl: <Lightbulb className="w-5 h-5 mr-2" />,
      boards: <BookOpen className="w-5 h-5 mr-2" />
    };

    return (
      <div className={`border-l-4 p-4 rounded-r-lg mb-6 ${colors[type] || colors.boards}`}>
        <div className="flex items-center font-bold mb-2 text-sm uppercase tracking-wide opacity-90">
          {icons[type]}
          {title}
        </div>
        <p className="text-sm md:text-base opacity-90">{text}</p>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      
      {/* MOBILE HEADER */}
      <div className="lg:hidden fixed top-0 w-full bg-slate-900 text-white z-50 px-4 py-3 flex justify-between items-center shadow-md">
        <div className="font-bold text-lg flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-400" />
          MedEd Navigator
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* SIDEBAR */}
      <div className={`fixed lg:static inset-y-0 left-0 w-72 bg-slate-900 text-slate-300 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out z-40 overflow-y-auto flex flex-col border-r border-slate-800`}>
        <div className="p-6 hidden lg:block">
          <h1 className="text-xl font-bold text-white flex items-center">
            <Activity className="w-6 h-6 mr-2 text-blue-400" />
            MedEd Navigator
          </h1>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">MicroScript Library</p>
        </div>

        <div className="px-4 mb-6 mt-16 lg:mt-0">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="w-full bg-slate-800 text-sm text-white rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-slate-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 px-2 space-y-1 pb-8">
          {Object.entries(allWeeks).map(([weekKey, weekInfo]) => (
            <div key={weekKey} className="mb-2">
              <button 
                onClick={() => { setActiveWeek(weekKey); setActiveTopicIndex(0); setSearchTerm(''); }}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeWeek === weekKey ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
              >
                <div className="flex items-center">
                  <span className="opacity-70 mr-3">{weekInfo.icon}</span>
                  <div className="text-left">
                    <div className="leading-none">{weekKey}</div>
                    <div className="text-xs opacity-60 font-normal mt-0.5">{weekInfo.title}</div>
                  </div>
                </div>
                {activeWeek === weekKey && <ChevronRight className="w-4 h-4" />}
              </button>
              
              {activeWeek === weekKey && (
                <div className="ml-4 mt-1 border-l-2 border-slate-700 pl-2 space-y-1">
                  {weekInfo.data.length > 0 ? (
                    weekInfo.data.map((topic, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setActiveTopicIndex(idx); if(window.innerWidth < 1024) setMobileMenuOpen(false); }}
                        className={`w-full text-left px-3 py-2 text-xs rounded-md transition-all ${activeTopicIndex === idx ? 'bg-slate-800 text-blue-400 font-medium' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        {topic.title}
                      </button>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-xs text-slate-600 italic">
                      Content not loaded for demo
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          v1.0 • Canvas MicroScripts
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {activeTopic ? (
          <main className="flex-1 overflow-y-auto pt-16 lg:pt-0 pb-10">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-10 shadow-sm">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                  {allWeeks[activeWeek].title} • {activeWeek}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  {activeTopic.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="max-w-4xl mx-auto px-6 py-8">
              
              {/* Clinical Setup */}
              {activeTopic['Clinical Setup'] && renderClinicalSetup(activeTopic['Clinical Setup'])}

              {/* Teaching Objectives */}
              {activeTopic['Teaching Objectives'] && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-slate-400" />
                    Objectives
                  </h3>
                  {renderListSection(activeTopic['Teaching Objectives'], 'check')}
                </div>
              )}

              {/* Teaching Points */}
              {activeTopic['Teaching Points'] && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-slate-400" />
                    Key Teaching Points
                  </h3>
                  {renderListSection(activeTopic['Teaching Points'], 'number')}
                </div>
              )}

              {/* Key Numbers */}
              {activeTopic['Key Numbers'] && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-slate-400" />
                    Key Numbers
                  </h3>
                  {renderKeyNumbers(activeTopic['Key Numbers'])}
                </div>
              )}

              {/* Callouts */}
              <div className="grid grid-cols-1 gap-4">
                {activeTopic['Common Pitfall'] && renderCallout('Common Pitfall', activeTopic['Common Pitfall'], 'pitfall')}
                {activeTopic['Teaching Pearl'] && renderCallout('Teaching Pearl', activeTopic['Teaching Pearl'], 'pearl')}
                {activeTopic['Boards + Bedside Tie-In'] && renderCallout('Boards + Bedside', activeTopic['Boards + Bedside Tie-In'], 'boards')}
              </div>

              {/* References */}
              {activeTopic['References'] && (
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">References</h4>
                  <div className="text-xs text-slate-500 space-y-1">
                    {activeTopic['References'].split('\n').filter(r => r.trim()).map((ref, i) => (
                      <p key={i}>{ref}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Footer */}
            <div className="max-w-4xl mx-auto px-6 pb-12 flex justify-between">
              <button 
                onClick={() => setActiveTopicIndex(Math.max(0, activeTopicIndex - 1))}
                disabled={activeTopicIndex === 0}
                className="text-sm font-medium text-slate-500 hover:text-blue-600 disabled:opacity-30 flex items-center"
              >
                Previous Topic
              </button>
              <button 
                onClick={() => setActiveTopicIndex(Math.min(filteredTopics.length - 1, activeTopicIndex + 1))}
                disabled={activeTopicIndex === filteredTopics.length - 1}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 disabled:opacity-30 flex items-center"
              >
                Next Topic <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </main>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4">
               <Activity className="w-12 h-12 text-blue-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Select a Topic</h2>
            <p className="text-slate-500 max-w-sm">
              Choose a topic from the sidebar to view the clinical microscript.
              {(activeWeek === 'Week 2' || activeWeek === 'Week 3' || activeWeek === 'Week 4') && (
                <span className="block mt-4 text-amber-600 bg-amber-50 p-2 rounded text-sm border border-amber-200">
                  <AlertCircle className="w-4 h-4 inline mr-1 -mt-0.5" />
                  Note: Content for this week has not been loaded into the demo to preserve file size.
                </span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
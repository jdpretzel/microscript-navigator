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
const WEEK_1_MARKDOWN = `# NSTEMI vs STEMI: Recognition and Initial Steps

## Clinical Setup
A 64-year-old man with diabetes presents with crushing chest pain radiating to his left arm, hypotension (100/64 mm Hg) and diaphoresis. His ECG shows ST-segment elevations in leads II, III and aVF with troponin pending. What initial steps should be taken and how do we distinguish STEMI from NSTEMI?

## Teaching Objectives
- Distinguish STEMI from NSTEMI based on ECG criteria and biomarker patterns
- Initiate evidence-based first steps for suspected acute coronary syndrome

## Teaching Points
1. A STEMI is defined by new ST-segment elevations at the J point in at least two contiguous leads (≥ 1 mm in most leads or ≥ 2 mm in V2-V3 for men ≥40 yr and ≥ 1.5 mm in V2-V3 for women) or new left bundle branch block with ischemic symptoms; NSTEMI shows ischemic symptoms and positive troponin without diagnostic ST elevation. [Ref 1]
2. Initial management for all suspected ACS includes prompt chewing of aspirin (162–325 mg), sublingual nitroglycerin for persistent chest pain (avoid if hypotensive or suspect right ventricular infarction), supplemental oxygen only if SpO₂ <90 %, and morphine for refractory pain. [Ref 1]
3. For STEMI, immediate reperfusion is critical; perform emergent percutaneous coronary intervention (PCI) within 90 min of first medical contact or administer fibrinolysis within 30 min if PCI unavailable. NSTEMI patients are risk-stratified for early invasive versus conservative management based on ECG changes, troponin elevation and clinical risk scores. [Ref 2]
4. Administer anticoagulation (unfractionated heparin or enoxaparin) and add a P2Y₁₂ inhibitor (ticagrelor or clopidogrel) as early as possible; avoid prasugrel in patients with prior stroke or TIA. [Ref 3]
5. Obtain serial ECGs and troponins to detect evolving ischemia; transfer immediately to a PCI-capable center if STEMI criteria are met or high-risk NSTEMI features are present. [Ref 2]

## Key Numbers
- ST-segment elevation ≥ 1 mm in two contiguous leads (or ≥ 2 mm in V2-V3 for men ≥ 40 yr, ≥ 1.5 mm in V2-V3 for women) defines STEMI. [Ref 1]
- For STEMI, door-to-balloon time target is ≤ 90 minutes; door-to-needle time for fibrinolysis is ≤ 30 minutes. [Ref 2]
- Troponin elevation above the 99th percentile upper reference limit with rising or falling pattern confirms myocardial injury and distinguishes NSTEMI from unstable angina. [Ref 3]

## Common Pitfall
Delays in reperfusion occur when STEMI is misdiagnosed as NSTEMI or when ST-elevations are subtle. Re-examine the ECG for reciprocal changes and repeat within 10 minutes if symptoms persist; any diagnostic uncertainty should err toward activating the cath lab. [Ref 2]

## Boards + Bedside Tie-In
On exams, STEMI patients require emergent reperfusion therapy whereas NSTEMI patients need risk-stratified invasive management. At the bedside, using a structured approach (rapid ECG interpretation, immediate antiplatelet therapy and anticoagulation, and timely cath lab activation) can improve survival.

## References
1. Collet J-P, Thiele H, Barbato E, et al. 2020 ESC Guidelines for the management of acute coronary syndromes in patients presenting without persistent ST-segment elevation. *Eur Heart J.* 2021;42(14):1289-1367. doi:10.1093/eurheartj/ehaa575 PMID: 32860058.
2. Ibanez B, James S, Agewall S, et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation. *Eur Heart J.* 2018;39(2):119-177. doi:10.1093/eurheartj/ehx393 PMID: 28886621.
3. Amsterdam EA, Wenger NK, Brindis RG, et al. 2014 AHA/ACC Guideline for the Management of Patients With Non–ST-Elevation Acute Coronary Syndromes. *J Am Coll Cardiol.* 2014;64(24):e139-e228. doi:10.1016/j.jacc.2014.09.017 PMID: 25260718.

---

# Chest Pain Risk Stratification Tools

## Clinical Setup
A 55-year-old woman arrives in the emergency department with intermittent chest discomfort for the past 4 hours. Her vitals are stable, ECG shows non-specific ST-T changes and the initial troponin is normal. How should we stratify her risk for major adverse cardiac events and decide on disposition?

## Teaching Objectives
- Utilize validated risk scores to triage patients with suspected ACS
- Interpret score results to guide testing and disposition decisions

## Teaching Points
1. The TIMI (Thrombolysis in Myocardial Infarction) risk score uses seven variables (age ≥65 yr, ≥3 CAD risk factors, known CAD with ≥50 % stenosis, aspirin use in the past 7 days, severe angina, ST deviation ≥0.5 mm, and elevated cardiac markers) to estimate 14-day risk of death/MI; scores ≥5 indicate high risk requiring early invasive strategy. [Ref 1]
2. The HEART score incorporates History, ECG, Age, Risk factors and initial Troponin; each component scores 0–2 points. HEART scores 0–3 indicate low risk (<2 % MACE), 4–6 moderate risk (~12 %) and ≥7 high risk (>50 %); low-risk patients may be discharged with outpatient follow-up. [Ref 2]
3. The GRACE score (Global Registry of Acute Coronary Events) predicts in-hospital mortality using age, heart rate, systolic BP, creatinine, Killip class, cardiac arrest at admission, ST deviation and biomarkers; high scores (>140) warrant intensive therapy and early angiography (not needed for routine ED use but helpful in inpatient risk stratification). [Ref 1]
4. Risk scores should be calculated before giving anti-ischemic therapy to avoid skewed troponin values; combine score results with clinical judgement, ongoing chest pain and dynamic ECG changes to decide on observation versus admission. [Ref 2]
5. Patients deemed low risk by HEART or TIMI scores and with two negative troponins (3 hours apart) can be safely discharged with close follow-up; moderate/high-risk patients need admission, telemetry and cardiology evaluation. [Ref 2]

## Key Numbers
- TIMI score ≥5 predicts ~20 % risk of death/MI at 14 days; scores 0–1 confer <5 % risk. [Ref 1]
- HEART score 0–3 corresponds to ~1.7 % risk of MACE, 4–6 to ~12 % and ≥7 to ~50 %. [Ref 2]
- GRACE score >140 suggests in-hospital mortality ≥8 %; <109 implies mortality <1 %. [Ref 1]

## Teaching Pearl
Risk scores complement but do not replace clinician judgement. A reassuring score may still miss atypical presentations (e.g., young women, diabetics) and cannot account for dynamic changes; repeat assessment is crucial. [Ref 2]

## Boards + Bedside Tie-In
Exams often present chest pain cases requiring selection of risk tools and interpretation. At the bedside, using the HEART or TIMI score helps standardize decision making, reduces unnecessary admissions, and ensures high-risk patients receive timely interventions.

## References
1. Antman EM, Cohen M, Bernink PJ, et al. The TIMI risk score for unstable angina/non–ST elevation MI. *JAMA.* 2000;284(7):835-842. doi:10.1001/jama.284.7.835 PMID: 10938172.
2. Backus BE, Six AJ, Kelder JC, et al. The HEART score for the assessment of patients with chest pain in the emergency department: a multinational validation study. *Crit Pathw Cardiol.* 2013;12(3):121-126. doi:10.1097/HPC.0b013e31828b327e PMID: 23892941.

---

# Antiplatelet and Anticoagulation in ACS

## Clinical Setup
A 68-year-old man with chest pressure and dynamic inferior ST-segment depressions is diagnosed with NSTEMI. After giving aspirin and nitrates, you consider additional antiplatelet and anticoagulant therapy. What agents should be selected and when?

## Teaching Objectives
- Select appropriate antiplatelet regimens for acute coronary syndrome
- Choose and monitor anticoagulants based on patient risk and invasive strategy

## Teaching Points
1. All patients with ACS should receive non-enteric-coated aspirin 162–325 mg as soon as possible, followed by daily aspirin 81 mg indefinitely. [Ref 1]
2. A P2Y₁₂ inhibitor (ticagrelor preferred, or clopidogrel/prasugrel) should be added to aspirin for dual therapy; ticagrelor 180 mg loading then 90 mg twice daily reduces ischemic events compared with clopidogrel. Prasugrel is given only if PCI is planned and is contraindicated in prior stroke/TIA. [Ref 2]
3. In NSTE-ACS, anticoagulation options include unfractionated heparin, low-molecular-weight heparin (enoxaparin 1 mg/kg twice daily) or the factor Xa inhibitor fondaparinux; choose unfractionated heparin if early invasive strategy is planned due to short half-life and reversibility. [Ref 1]
4. For STEMI treated with fibrinolysis, adjunct anticoagulation with heparin or enoxaparin for 48 hours (or until PCI) is recommended; avoid routine full-dose anticoagulation beyond hospital discharge. [Ref 3]
5. Duration of dual antiplatelet therapy after PCI is generally 12 months; shorter courses (3–6 months) may be considered in high-bleeding-risk patients while extended therapy beyond 12 months reduces ischemic events but increases bleeding. [Ref 2]

## Key Numbers
- Ticagrelor reduces cardiovascular death and MI compared with clopidogrel; number needed to treat ~53 but increases non-CABG bleeding. [Ref 2]
- For NSTE-ACS undergoing PCI, an initial bolus of unfractionated heparin 60 U/kg (max 4,000 U) followed by infusion 12 U/kg/hr achieves therapeutic anticoagulation. [Ref 1]
- Enoxaparin is dosed 1 mg/kg subcutaneously every 12 hr (or 1 mg/kg daily if CrCl <30 mL/min) for medical management. [Ref 1]

## Common Pitfall
Stopping dual antiplatelet therapy prematurely (<1 month after stent placement) markedly increases risk of stent thrombosis. Always clarify stent type, bleeding risk and upcoming procedures; coordinate with cardiology before discontinuation. [Ref 2]

## Boards + Bedside Tie-In
Exams frequently test knowledge of loading doses, contraindications and duration of antiplatelet therapy. Clinically, early administration of appropriate antiplatelet and anticoagulant agents reduces infarct size and mortality; understanding drug selection and timing helps avoid complications like bleeding or stent thrombosis.

## References
1. Amsterdam EA, Wenger NK, Brindis RG, et al. 2014 AHA/ACC Guideline for the Management of Patients With Non–ST-Elevation Acute Coronary Syndromes. *J Am Coll Cardiol.* 2014;64(24):e139-e228. doi:10.1016/j.jacc.2014.09.017 PMID: 25260718.
2. Levine GN, Bates ER, Bittl JA, et al. 2016 ACC/AHA guideline focused update on duration of dual antiplatelet therapy in patients with coronary artery disease. *Circulation.* 2016;134(10):e123-e155. doi:10.1161/CIR.0000000000000404 PMID: 27026020.
3. Ibanez B, James S, Agewall S, et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation. *Eur Heart J.* 2018;39(2):119-177. doi:10.1093/eurheartj/ehx393 PMID: 28886621.

---

# Post-MI Medication Optimization

## Clinical Setup
A 70-year-old woman is recovering after PCI for an anterior STEMI. Her blood pressure is 118/70 mm Hg and ejection fraction is 35 %. Beyond dual antiplatelet therapy, what medications improve survival and prevent remodeling after myocardial infarction?

## Teaching Objectives
- Initiate guideline-directed medications for secondary prevention after MI
- Explain how neurohormonal blockade and lipid lowering prevent adverse remodeling

## Teaching Points
1. Beta-blockers (metoprolol succinate, carvedilol or bisoprolol) reduce mortality and reinfarction; initiate within 24 hours if no contraindications (heart rate >60 bpm, systolic BP >90 mm Hg, no acute HF) and titrate to target doses. [Ref 1]
2. Start ACE inhibitors or ARBs within 24 hours for anterior MI, LV dysfunction (EF ≤40 %) or diabetes; transition to angiotensin receptor–neprilysin inhibitor (sacubitril/valsartan) after stabilization to further reduce cardiovascular death and HF hospitalization. [Ref 1]
3. High-intensity statin therapy (atorvastatin 40–80 mg or rosuvastatin 20–40 mg daily) should be initiated regardless of baseline LDL to lower recurrence and slow atherosclerosis. [Ref 1]
4. In patients with EF ≤40 % and symptoms of heart failure or diabetes, add a mineralocorticoid receptor antagonist (spironolactone or eplerenone) after ACEI/ARB and beta-blocker; monitor potassium and renal function. [Ref 1]
5. Continue dual antiplatelet therapy (aspirin + P2Y₁₂ inhibitor) for at least 12 months; consider indefinite low-dose aspirin and secondary P2Y₁₂ inhibitor depending on stent type and bleeding risk. [Ref 2]

## Key Numbers
- Target heart rate for beta-blocker therapy is 50–60 bpm at rest; titrate as tolerated. [Ref 1]
- Initiating ACE inhibitor within 24 hours after MI reduces mortality by ~7 % at 30 days and up to 20 % by 1 year. [Ref 1]
- High-intensity statins reduce major vascular events by ~22 % per 1 mmol/L LDL reduction. [Ref 1]

## Teaching Pearl
After an MI, medications are titrated to maximally tolerated doses rather than a one-size-fits-all. Schedule frequent follow-up to up-titrate beta-blockers and ACEI/ARNI and ensure adherence. Check renal function and electrolytes regularly. [Ref 1]

## Boards + Bedside Tie-In
Exams test which drugs improve survival post-MI and when to initiate them. At the bedside, early initiation of beta-blockers, ACEI/ARNI, statins and aldosterone antagonists prevents remodeling, reduces recurrent ischemia and improves long-term outcomes.

## References
1. Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA guideline for the management of heart failure. *Circulation.* 2022;145(18):e895-e1032. doi:10.1161/CIR.0000000000001063 PMID: 35363499.
2. Levine GN, Bates ER, Bittl JA, et al. 2016 ACC/AHA guideline focused update on duration of dual antiplatelet therapy in patients with coronary artery disease. *Circulation.* 2016;134(10):e123-e155. doi:10.1161/CIR.0000000000000404 PMID: 27026020.

---

# Stable Angina: Medical Management Principles

## Clinical Setup
A 60-year-old man with known chronic coronary disease reports exertional chest tightness relieved by rest. His vital signs and ECG are normal. How should his angina be managed medically, and what evidence supports an optimal medical therapy–first strategy?

## Teaching Objectives
- Implement foundational therapies for chronic stable angina
- Evaluate when to consider revascularization versus optimal medical therapy

## Teaching Points
1. Antianginal therapy begins with beta-blockers as first-line agents to reduce heart rate and myocardial oxygen demand; if symptoms persist, add a long-acting nitrate or calcium channel blocker. Ranolazine can be used for refractory angina without affecting heart rate or blood pressure. [Ref 1]
2. All patients should receive daily low-dose aspirin (or clopidogrel if aspirin-intolerant) and high-intensity statin therapy; aggressive risk factor modification (blood pressure control, smoking cessation, weight loss) reduces future events. [Ref 2]
3. ACE inhibitors or ARBs improve outcomes in patients with hypertension, diabetes or left ventricular dysfunction; add SGLT2 inhibitors in diabetic patients for cardiovascular benefit. [Ref 2]
4. The COURAGE trial demonstrated that optimal medical therapy (OMT) was non-inferior to PCI for stable CAD in preventing death/MI, though PCI improved angina relief; OMT included aspirin, statins, beta-blockers, ACEI/ARB and lifestyle measures. [Ref 3]
5. The ISCHEMIA trial compared an initial invasive strategy versus OMT in moderate-to-severe ischemia; no difference in all-cause mortality or MI was found, supporting an OMT-first approach unless refractory angina or high-risk anatomy (left main disease, LVEF <35 %). [Ref 4]

## Key Numbers
- Beta-blockers decrease angina episodes by ~25–30 % and should be titrated to resting heart rate 55–60 bpm. [Ref 1]
- In COURAGE, PCI plus OMT showed no reduction in death/MI compared with OMT alone over 4.6 years (19.0 % vs 18.5 %). [Ref 3]
- In ISCHEMIA, cumulative incidence of cardiovascular death/MI at 5 years was similar between invasive and conservative strategies (~13 %). [Ref 4]

## Teaching Pearl
Optimal medical therapy is dynamic; adjust medications and lifestyle interventions based on symptoms and tolerance. Reserve revascularization for patients with persistent angina despite maximally tolerated therapy or high-risk features on noninvasive testing. [Ref 4]

## Boards + Bedside Tie-In
Exams may ask about trial results and sequencing of therapy for stable angina. Clinically, focusing on medical therapy reduces morbidity and often obviates the need for invasive procedures; patient education on lifestyle modification is crucial.

## References
1. Fihn SD, Gardin JM, Abrams J, et al. 2012 ACCF/AHA/ACP/AATS/PCNA/SCAI/STS guideline for the diagnosis and management of patients with stable ischemic heart disease. *J Am Coll Cardiol.* 2012;60(24):e44-e164. doi:10.1016/j.jacc.2012.07.013 PMID: 23182125.
2. Lawton JS, Tamis-Holland JE, Alviar CL, et al. 2023 ACC/AHA/ACCP/ASPC/NLA/PCNA guideline for the diagnosis and management of chronic coronary disease. *Circulation.* 2023;148(3):e111-e308. doi:10.1161/CIR.0000000000001168 PMID: 37471501.
3. Boden WE, O’Rourke RA, Teo KK, et al. Optimal medical therapy with or without PCI for stable coronary disease. *N Engl J Med.* 2007;356(15):1503-1516. doi:10.1056/NEJMoa070829 PMID: 17387127.
4. Maron DJ, Hochman JS, Reynolds HR, et al. Initial invasive or conservative strategy for stable coronary disease. *N Engl J Med.* 2020;382(15):1395-1407. doi:10.1056/NEJMoa1915922 PMID: 32227755.

---

# Atrial Fibrillation: Rate vs Rhythm Control

## Clinical Setup
A 76-year-old man with hypertension and heart failure with preserved ejection fraction presents with new-onset atrial fibrillation (AF) and palpitations for 8 hours. His blood pressure is 128/78 mm Hg and he is mildly dyspneic. Should his management emphasize rate control or rhythm control?

## Teaching Objectives
- Compare indications, benefits and risks of rate versus rhythm control strategies
- Apply trial data to individualize AF management

## Teaching Points
1. Rate control aims to control ventricular response and relieve symptoms; beta-blockers or nondihydropyridine calcium channel blockers (diltiazem, verapamil) are first-line agents. Digoxin is reserved for sedentary patients or when hypotension limits other agents. [Ref 1]
2. Rhythm control (antiarrhythmic drugs or electrical cardioversion) is considered for persistent symptoms despite adequate rate control, first episode of AF in young patients, tachy-cardiomyopathy, or when AF precipitates heart failure. [Ref 1]
3. The AFFIRM trial showed no survival advantage of rhythm control over rate control; rhythm control was associated with more hospitalizations and adverse drug effects, so rate control with adequate anticoagulation remains the default strategy. [Ref 2]
4. In patients with symptomatic AF <48 hr onset, early cardioversion is reasonable; anticoagulation is still required based on CHA2DS2-VASc score to prevent thromboembolism. [Ref 1]
5. Emerging data suggest that early rhythm control within the first year of AF diagnosis may reduce cardiovascular events and stroke, but this approach requires careful patient selection and specialist consultation. [Ref 1]

## Key Numbers
- In AFFIRM, all-cause mortality at 5 years was similar (23.8 % rhythm vs 21.3 % rate). [Ref 2]
- Target resting heart rate in AF is generally <80 bpm; lenient control (<110 bpm) may be acceptable in asymptomatic patients. [Ref 1]
- Antiarrhythmic drugs carry pro-arrhythmic risk; amiodarone increases mortality in non-ischemic HF at high doses (avoid unless other agents fail). [Ref 1]

## Teaching Pearl
Rate control is often easier and safer than rhythm control; ensure adequate anticoagulation and address reversible factors (e.g., thyroid disease, sleep apnea). Engage patients in shared decision making when considering rhythm control. [Ref 2]

## Boards + Bedside Tie-In
Test questions may ask which patients benefit from rhythm control. In practice, older patients with minimal symptoms generally do well with rate control, whereas younger, symptomatic patients or those with tachy-cardiomyopathy may benefit from early rhythm control.

## References
1. January CT, Wann LS, Calkins H, et al. 2019 AHA/ACC/HRS Focused update on atrial fibrillation: management of patients with atrial fibrillation. *J Am Coll Cardiol.* 2019;74(1):104-132. doi:10.1016/j.jacc.2019.01.011 PMID: 30703431.
2. Wyse DG, Waldo AL, DiMarco JP, et al. A comparison of rate control and rhythm control in patients with atrial fibrillation. *N Engl J Med.* 2002;347(23):1825-1833. doi:10.1056/NEJMoa021328 PMID: 12466506.

---

# Anticoagulation Decisions in Atrial Fibrillation

## Clinical Setup
A 72-year-old woman with paroxysmal AF and hypertension asks whether she needs anticoagulation. Her CHA2DS2-VASc score is 3 (age ≥65, female sex and hypertension). How should stroke and bleeding risks guide anticoagulation decisions?

## Teaching Objectives
- Apply CHA2DS2-VASc and HAS-BLED scores to guide anticoagulation
- Select appropriate anticoagulant agents for non-valvular AF

## Teaching Points
1. The CHA2DS2-VASc score assigns points for congestive heart failure (1), hypertension (1), age ≥75 (2), diabetes (1), stroke/TIA (2), vascular disease (1), age 65–74 (1) and female sex (1). Anticoagulation is recommended for scores ≥2 in men or ≥3 in women. [Ref 1]
2. The HAS-BLED score estimates bleeding risk (hypertension, abnormal liver/kidney function, stroke history, bleeding history, labile INR, age >65 yr, drugs/alcohol). A score ≥3 indicates high bleeding risk; optimize modifiable factors but do not withhold anticoagulation solely based on high score. [Ref 1]
3. Direct oral anticoagulants (DOACs) such as apixaban, rivaroxaban, dabigatran and edoxaban are preferred over warfarin for non-valvular AF due to lower rates of intracranial hemorrhage and similar or improved efficacy. Warfarin remains appropriate for patients with mechanical heart valves, moderate-to-severe mitral stenosis or severe renal impairment. [Ref 1]
4. In patients with CHA2DS2-VASc score of 1 (men) or 2 (women), anticoagulation may be considered after discussing risks and benefits; aspirin alone is insufficient. The CHA₂DS₂-VASc score reclassifies many patients with a CHADS₂ score of 1 as truly low risk (<1 % annual stroke), identifying those unlikely to benefit from anticoagulation. [Ref 1, 2]
5. Reassess stroke and bleeding risks annually and educate patients on adherence, dietary interactions (for warfarin) and monitoring needs; DOAC dosing must be adjusted for renal function and age. [Ref 1]

## Key Numbers
- CHA2DS2-VASc score ≥2 in men or ≥3 in women confers annual stroke risk >2 % and warrants anticoagulation. [Ref 1]
- Apixaban 5 mg twice daily reduces stroke/systemic embolism by ~21 % compared with warfarin and lowers major bleeding by ~31 %. [Ref 1]
- HAS-BLED score ≥3 predicts major bleeding risk of ~4 % per year; modifiable factors include uncontrolled hypertension, labile INR and concomitant antiplatelets/alcohol. [Ref 1]

## Teaching Pearl
Use both stroke and bleeding scores to guide shared decision-making. A high bleeding risk rarely outweighs the benefits of anticoagulation; instead, address reversible bleeding risks (e.g., uncontrolled blood pressure, NSAID use). [Ref 1]

## Boards + Bedside Tie-In
Test questions often present patients with specific CHA2DS2-VASc and HAS-BLED scores and ask about initiation of anticoagulation. Clinically, DOACs have simplified management, but careful patient selection and dose adjustment remain essential.

## References
1. January CT, Wann LS, Calkins H, et al. 2019 AHA/ACC/HRS Focused update on atrial fibrillation: management of patients with atrial fibrillation. *J Am Coll Cardiol.* 2019;74(1):104-132. doi:10.1016/j.jacc.2019.01.011 PMID: 30703431.
2. Lip GYH, Nieuwlaat R, Pisters R, et al. The CHA₂DS₂-VASc score identifies those patients with atrial fibrillation and a CHADS₂ score of 1 who are unlikely to benefit from oral anticoagulant therapy. *Eur Heart J.* 2013;34(3):170-176. doi:10.1093/eurheartj/ehs314 PMID: 23018151.

---

# Approach to Inpatient Bradycardia

## Clinical Setup
A 78-year-old man admitted for pneumonia develops symptomatic bradycardia with heart rate 32 bpm, blood pressure 88/50 mm Hg and dizziness. The ECG shows sinus bradycardia without heart block. What is the immediate approach to managing bradycardia in the hospital?

## Teaching Objectives
- Recognize and treat clinically significant bradycardia using ACLS algorithms
- Identify reversible causes and determine when pacing is required

## Teaching Points
1. Assess airway, breathing and circulation; provide supplemental oxygen and establish IV access. If the patient is unstable (hypotension, altered mental status, shock, ischemic chest discomfort), administer atropine 0.5 mg IV bolus, repeating every 3–5 minutes to a total of 3 mg. [Ref 1]
2. If atropine is ineffective, initiate transcutaneous pacing or infusions of dopamine (2–10 mcg/kg/min) or epinephrine (2–10 mcg/min) while preparing for transvenous pacing. [Ref 1]
3. Evaluate for and treat reversible causes (the “Hs and Ts”): hypoxia, hypothermia, hyperkalemia, hypothyroidism, hypoglycemia, toxins (beta-blockers, calcium channel blockers, digoxin), ischemia/infarction and increased intracranial pressure. [Ref 1]
4. Chronic or persistent bradyarrhythmias may require pacemaker implantation, particularly for symptomatic sinus node dysfunction or high-grade AV block; avoid atropine in suspected infranodal block as it may exacerbate conduction delay and adjust atropine dosing to lean body weight to avoid paradoxical bradycardia in obese patients. [Ref 1, 2]
5. Discontinue AV nodal blocking agents (beta-blockers, calcium channel blockers, digoxin) and review other medications (opioids, sedatives) that may depress sinus node function; correct electrolyte abnormalities (potassium, calcium, magnesium). [Ref 1]

## Key Numbers
- Atropine dose: 0.5 mg IV every 3–5 minutes, maximum total dose 3 mg. [Ref 1]
- Transcutaneous pacing energy: start at 60–80 mA and adjust until capture; pacing rate 60–70 bpm. [Ref 1]
- Dopamine or epinephrine infusions: 2–10 mcg/kg/min (dopamine) or 2–10 mcg/min (epinephrine) to support heart rate and blood pressure. [Ref 1]

## Common Pitfall
Treating asymptomatic sinus bradycardia or first-degree AV block may lead to unnecessary pacing and medication adjustments. Intervene only when bradycardia causes hemodynamic compromise or has high risk of progression. [Ref 1]

## Boards + Bedside Tie-In
Exam questions often present the ACLS bradycardia algorithm. In practice, rapid recognition of instability and adherence to stepwise treatment, including atropine, pacing, and identification of reversible causes can be lifesaving.

## References
1. Kusumoto FM, Schoenfeld MH, Barrett C, et al. 2018 ACC/AHA/HRS guideline on the evaluation and management of patients with bradycardia and cardiac conduction delay. *J Am Coll Cardiol.* 2019;74(7):932-987. doi:10.1016/j.jacc.2018.10.043 PMID: 30412710.
2. Carron M, Veronese S. Atropine sulfate for treatment of bradycardia in a patient with morbid obesity: what may happen when you least expect it. *BMJ Case Rep.* 2015;2015:bcr2014207596. doi:10.1136/bcr-2014-207596 PMID: 25634857.

---

# QTc Prolongation: Causes and Management

## Clinical Setup
A 62-year-old woman treated with ciprofloxacin and ondansetron for a urinary tract infection develops palpitations and lightheadedness. Her ECG shows a QTc of 520 ms. How should we evaluate and manage this prolonged QT interval?

## Teaching Objectives
- Identify common causes of QT prolongation and estimate torsades risk
- Implement appropriate management to prevent and treat torsades de pointes

## Teaching Points
1. QT prolongation can result from medications (antiarrhythmics like sotalol, amiodarone; antibiotics like macrolides, fluoroquinolones; psychotropics), electrolyte disturbances (hypokalemia, hypomagnesemia, hypocalcemia), structural heart disease and congenital long-QT syndromes. [Ref 1]
2. The Tisdale risk score predicts QTc prolongation in hospitalized patients using factors such as age ≥68 yr, female sex, loop diuretic use, serum potassium ≤3.5 mEq/L, admission QTc ≥450 ms, sepsis, and use of ≥2 QT-prolonging drugs; scores ≥11 indicate high risk. [Ref 1]
3. Management involves discontinuing offending drugs, correcting electrolytes (potassium >4.5 mEq/L, magnesium >2 mg/dL), avoiding bradycardia and monitoring continuous telemetry. [Ref 1]
4. If torsades de pointes occurs, treat with intravenous magnesium sulfate 2 g over 1–2 minutes (repeat as needed), temporary pacing or isoproterenol infusion to increase heart rate, and cardioversion if unstable. [Ref 2]
5. Congenital long-QT syndromes may require beta-blocker therapy and implantable cardioverter-defibrillator (ICD) for secondary prevention; avoid QT-prolonging drugs lifelong. [Ref 2]

## Key Numbers
- QTc >500 ms is associated with a five-fold increased risk of torsades de pointes and warrants immediate evaluation. [Ref 1]
- Tisdale score ≥11 predicts a ~12 % incidence of QT prolongation; scores <7 have <3 % risk. [Ref 1]
- Magnesium sulfate dose for torsades: 2 g IV over 1–2 minutes; may repeat twice if torsades persists. [Ref 2]

## Teaching Pearl
QTc varies with heart rate and requires correction; use Bazett’s formula cautiously at extremes of heart rate. Always review medication lists for hidden QT-prolonging agents, especially in elderly or critically ill patients. [Ref 1]

## Boards + Bedside Tie-In
On exams, identify medications that prolong the QT interval and know acute management of torsades. Clinically, proactive risk assessment using the Tisdale score and aggressive correction of electrolytes can prevent lethal arrhythmias.

## References
1. Tisdale JE, Jaynes HA, Kingery JR, et al. Development and validation of a risk score to predict QT interval prolongation in hospitalized patients. *Circ Cardiovasc Qual Outcomes.* 2013;6(4):479-487. doi:10.1161/CIRCOUTCOMES.113.000152 PMID: 23716032.
2. Lachman N, Syed FF, Bansal O, et al. Polymorphic ventricular tachycardia: terminology, mechanism, diagnosis, and emergency therapy. *Circulation.* 2021;143(18):1878-1897. doi:10.1161/CIRCULATIONAHA.121.055783 PMID: 34491774.

---

# Heart Block: Recognition and Initial Approach

## Clinical Setup
A 68-year-old woman presents with dizziness and syncope. Her ECG shows P waves unrelated to QRS complexes with ventricular rate 30 bpm. How do we recognize and manage different types of atrioventricular (AV) block?

## Teaching Objectives
- Distinguish first-, second- and third-degree AV blocks on ECG
- Initiate appropriate management based on block type and symptoms

## Teaching Points
1. First-degree AV block is characterized by a prolonged PR interval (>200 ms) with 1:1 AV conduction and usually requires no treatment unless associated with bradycardia or drug toxicity. [Ref 1]
2. Second-degree type I (Mobitz I/Wenckebach) shows progressive PR prolongation followed by a dropped QRS; it often occurs at the AV node and is usually benign; monitor for symptoms and discontinue AV nodal blockers. [Ref 1]
3. Second-degree type II (Mobitz II) exhibits constant PR intervals with intermittent non-conducted P waves and carries a high risk of progression to complete block; correctly identifying Mobitz II is crucial as misinterpreted forms exist and it always requires pacing. [Ref 1, 2]
4. Third-degree (complete) AV block shows complete atrioventricular dissociation; atrial and ventricular rates are independent. Urgent pacing (temporary transvenous followed by permanent pacemaker) is indicated, especially if symptomatic or associated with MI. [Ref 1]
5. Evaluate for reversible causes including ischemia (especially inferior MI), medications (beta-blockers, calcium channel blockers, digoxin), electrolyte disturbances and infiltrative diseases. Treat underlying causes while arranging pacing. [Ref 1]

## Key Numbers
- PR interval >200 ms defines first-degree AV block; >300 ms may cause fatigue or presyncope. [Ref 1]
- In complete heart block, escape ventricular rhythm is usually 20–40 bpm; survival requires temporary pacing and eventual permanent pacemaker. [Ref 1]
- Mobitz II block is often infranodal (His-Purkinje) and progresses to complete block in up to 50 % of cases. [Ref 1]

## Teaching Pearl
Do not rely solely on atropine for high-grade or complete AV block because infranodal block may not respond; early involvement of electrophysiology and placement of a temporary pacemaker bridge to permanent pacing is essential. [Ref 1]

## Boards + Bedside Tie-In
Exams test identification of AV blocks from ECGs and appropriate acute management. Clinically, timely recognition and intervention prevent syncope, sudden death and complications such as torsades secondary to profound bradycardia.

## References
1. Kusumoto FM, Schoenfeld MH, Barrett C, et al. 2018 ACC/AHA/HRS guideline on the evaluation and management of patients with bradycardia and cardiac conduction delay. *J Am Coll Cardiol.* 2019;74(7):932-987. doi:10.1016/j.jacc.2018.10.043 PMID: 30412710.
2. Barold SS, Herweg B. Mobitz type II second-degree atrioventricular block: a commonly overdiagnosed and misinterpreted arrhythmia. *Front Cardiovasc Med.* 2024;11:1450705. doi:10.3389/fcvm.2024.1450705 PMID: 39267806.

---

# Acute Decompensated Heart Failure Management

## Clinical Setup
A 72-year-old man with known HFrEF (EF 30 %) presents with acute dyspnea, orthopnea and bilateral crackles. He is hypertensive and has jugular venous distention. How should his acute decompensated heart failure (ADHF) be managed in the first few hours?

## Teaching Objectives
- Assess and stabilize patients with ADHF using the warm/cold and wet/dry profiles
- Implement evidence-based strategies for preload and afterload reduction and determine when inotropes or mechanical support are needed

## Teaching Points
1. Evaluate hemodynamic profile: most ADHF patients are “warm and wet” (adequate perfusion, volume overload). Provide supplemental oxygen and non-invasive ventilation if hypoxemic; monitor blood pressure, urine output and consider invasive monitoring for unclear profiles. [Ref 1]
2. Intravenous loop diuretics (furosemide 20–40 mg IV bolus for naïve patients or equivalent of home dose) are first-line to relieve congestion; double the dose if inadequate diuresis and monitor electrolytes and renal function. [Ref 2]
3. Vasodilators (nitroglycerin, nitroprusside) rapidly reduce preload and afterload in hypertensive ADHF; avoid if systolic BP <90 mm Hg or right ventricular infarction. For normotensive patients with persistent dyspnea, nitrates improve symptoms. [Ref 1]
4. Hypotensive “cold and wet” patients may need inotropes (dobutamine or milrinone) and vasopressors (norepinephrine) along with cautious diuresis; treat precipitating factors (ischemia, arrhythmia, infection) and evaluate for mechanical circulatory support. [Ref 1]
5. Avoid routine use of opioids, calcium channel blockers or non-invasive positive pressure ventilation in cardiogenic shock; manage comorbidities (e.g., atrial fibrillation, hypertensive emergency) concurrently. [Ref 1]

## Key Numbers
- Goal urine output: ≥0.5 mL/kg/hr; diuresis of 1–2 L/day indicates effective decongestion. [Ref 2]
- Furosemide IV dose should be 1–2.5 times the patient’s total daily oral dose; doubling the dose increases natriuresis without raising toxicity. [Ref 2]
- Nitrates reduce pulmonary capillary wedge pressure by ~15 % within minutes and improve dyspnea; start nitroglycerin infusion at 10–20 mcg/min and titrate. [Ref 1]

## Common Pitfall
Continuing high-dose intravenous diuretics without reassessing diuretic response can worsen renal function and electrolyte imbalance. Monitor urine sodium and adjust therapy; consider adding a thiazide-type diuretic or ultrafiltration if refractory to loop diuretics. [Ref 2]

## Boards + Bedside Tie-In
Exam questions often focus on initial management of decompensated HF and recognition of hemodynamic profiles. Clinically, a systematic approach (oxygenation, diuretics, vasodilators and addressing precipitating causes) reduces mortality and rehospitalization.

## References
1. Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA guideline for the management of heart failure. *Circulation.* 2022;145(18):e895-e1032. doi:10.1161/CIR.0000000000001063 PMID: 35363499.
2. Felker GM, Lee KL, Bull DA, et al. Diuretic strategies in patients with acute decompensated heart failure. *N Engl J Med.* 2011;364(9):797-805. doi:10.1056/NEJMoa1005419 PMID: 21366472.

---

# HFrEF: Guideline-Directed Medical Therapy

## Clinical Setup
A 58-year-old man with ischemic cardiomyopathy (EF 30 %) is seen in the clinic for management of chronic heart failure with reduced ejection fraction (HFrEF). He is currently taking lisinopril, metoprolol succinate and furosemide. What additional therapies should be implemented to optimize his care?

## Teaching Objectives
- Identify classes of drugs that improve survival and quality of life in HFrEF
- Sequence initiation and up-titration of guideline-directed medical therapy (GDMT)

## Teaching Points
1. Initiate an angiotensin receptor–neprilysin inhibitor (sacubitril/valsartan) in place of ACEI/ARB for symptomatic HFrEF to reduce cardiovascular death and HF hospitalization; the PARADIGM-HF trial demonstrated that sacubitril/valsartan reduced cardiovascular death or HF hospitalization by about 20 % compared with enalapril. [Ref 1, 2]
2. Continue evidence-based beta-blockers (carvedilol, metoprolol succinate, bisoprolol) and titrate to maximum tolerated doses; avoid initiation during acute decompensation. [Ref 1]
3. Add a mineralocorticoid receptor antagonist (spironolactone or eplerenone) for patients with EF ≤35 % and persistent symptoms despite ACEI/ARB/ARNI and beta-blocker; monitor renal function and potassium. [Ref 1]
4. Sodium–glucose cotransporter 2 (SGLT2) inhibitors (dapagliflozin or empagliflozin) reduce cardiovascular death and HF hospitalization independent of diabetes status; initiate in all eligible HFrEF patients. [Ref 1]
5. Hydralazine plus isosorbide dinitrate improves survival in African American patients with HFrEF despite ACEI and beta-blocker therapy or in those intolerant to ACEI/ARB/ARNI. Consider implantable cardioverter-defibrillator (ICD) for primary prevention if EF ≤35 % after ≥3 months of GDMT. [Ref 1]

## Key Numbers
- Sacubitril/valsartan reduces all-cause mortality by ~16 % compared with enalapril in the PARADIGM-HF trial; target dose 97/103 mg twice daily. [Ref 1]
- SGLT2 inhibitors lower the risk of cardiovascular death or HF hospitalization by ~25 % regardless of diabetes status. [Ref 1]
- Spironolactone reduces mortality by ~30 % in severe HF but increases hyperkalemia risk; monitor potassium and creatinine within 1 week of initiation and regularly thereafter. [Ref 1]

## Teaching Pearl
Initiate GDMT sequentially but expeditiously, starting with beta-blockers and ACEI/ARB/ARNI, then adding mineralocorticoid receptor antagonists and SGLT2 inhibitors. Frequent follow-up is key to titrate doses and monitor side effects. [Ref 1]

## Boards + Bedside Tie-In
Test questions may require knowing which medications improve survival in HFrEF and their sequencing. In clinical practice, comprehensive GDMT dramatically reduces mortality, hospitalizations and symptoms, making aggressive implementation essential.

## References
1. Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA guideline for the management of heart failure. *Circulation.* 2022;145(18):e895-e1032. doi:10.1161/CIR.0000000000001063 PMID: 35363499.
2. McMurray JJ, Packer M, Desai AS, et al. Angiotensin-neprilysin inhibition versus enalapril in heart failure. *N Engl J Med.* 2014;371(11):993-1004. doi:10.1056/NEJMoa1409077 PMID: 25176015.

---

# Diuretic Resistance: Assessment and Strategies

## Clinical Setup
A 75-year-old woman with chronic HFrEF is admitted with volume overload. After receiving high-dose IV furosemide, her urine output is minimal and she remains edematous. How should diuretic resistance be assessed and managed?

## Teaching Objectives
- Identify causes of diuretic resistance in heart failure
- Employ strategies to overcome resistance, including combination therapy and non-pharmacologic interventions

## Teaching Points
1. Diuretic resistance is multifactorial; consider inadequate dosing, poor gastrointestinal absorption (edema of gut), renal hypoperfusion, nephron remodeling and excessive sodium intake. Check medication adherence and restrict dietary sodium (<2 g/day) and fluid intake (1.5–2 L/day). [Ref 1]
2. Assess diuretic response by measuring urine output and spot urine sodium after a loop diuretic dose; urine sodium <50 mEq/L suggests diuretic resistance and may prompt dose escalation or combination therapy. [Ref 1]
3. Strategies include increasing loop diuretic dose (or switching to continuous infusion), combining with a thiazide-type diuretic (metolazone 2.5–10 mg orally or chlorothiazide 500 mg IV) to block distal sodium reabsorption, or adding acetazolamide for metabolic alkalosis. [Ref 1]
4. The DOSE trial demonstrated no difference in outcomes between bolus and continuous infusion, but higher doses achieved greater diuresis and symptom relief; adjust based on renal function and blood pressure. [Ref 2]
5. Consider ultrafiltration or peritoneal dialysis in refractory cases with severe volume overload despite maximal pharmacologic therapy; coordinate with nephrology and monitor for intravascular volume depletion. [Ref 1]

## Key Numbers
- Urine sodium <50 mEq/L after loop diuretic indicates poor natriuresis and suggests diuretic resistance. [Ref 1]
- Metolazone enhances sodium excretion; diuresis increases by ~1 L/day when combined with loop diuretics but risk of hyponatremia and hypokalemia necessitates close monitoring. [Ref 1]
- In the DOSE trial, high-dose furosemide (2.5 × home dose) resulted in greater weight loss (3.3 kg vs 2.0 kg) at 72 hours without increased adverse events. [Ref 2]

## Teaching Pearl
Early recognition of diuretic resistance allows timely escalation of therapy; check urine sodium and diuretic delivery, and consider sequential nephron blockade. Always monitor electrolytes and renal function when using combination diuretics. [Ref 1]

## Boards + Bedside Tie-In
Exams may ask about combination diuretic therapy and interpretations of urine sodium. Clinically, overcoming diuretic resistance improves congestion relief, quality of life and reduces hospital length of stay.

## References
1. Horiuchi Y, Wettersten N. Treatment strategies for diuretic resistance in patients with heart failure. *J Cardiol.* 2025;85(1):1-7. doi:10.1016/j.jjcc.2024.06.005 PMID: 38914279.
2. Felker GM, Lee KL, Bull DA, et al. Diuretic strategies in patients with acute decompensated heart failure. *N Engl J Med.* 2011;364(9):797-805. doi:10.1056/NEJMoa1005419 PMID: 21366472.

---

# Valvular Heart Disease: Recognizing High-Risk Features

## Clinical Setup
A 72-year-old man with known aortic stenosis reports worsening exertional dyspnea. His echocardiogram shows a peak aortic jet velocity of 4.5 m/s, mean gradient 50 mm Hg and valve area 0.8 cm². What high-risk features across valvular diseases necessitate urgent referral for valve intervention?

## Teaching Objectives
- Recognize high-risk features in aortic and mitral valve disease that prompt intervention
- Apply guideline thresholds to decide when to refer for surgery or transcatheter therapy

## Teaching Points
1. Severe aortic stenosis is defined by aortic valve area <1.0 cm², mean gradient ≥40 mm Hg or peak velocity ≥4.0 m/s; symptoms (angina, syncope, dyspnea) or left ventricular ejection fraction (LVEF) <50 % are high-risk features requiring valve replacement (surgical or transcatheter). [Ref 1, 2]
2. In chronic severe aortic regurgitation, intervention is indicated when LVEF ≤55 % or left ventricular end-systolic diameter ≥50 mm (or indexed >25 mm/m²) even if asymptomatic; symptoms with preserved EF also prompt surgery. [Ref 1]
3. Severe mitral regurgitation warrants repair or replacement if there are symptoms, LVEF 30–60 %, left ventricular end-systolic diameter ≥40 mm or pulmonary hypertension (>50 mm Hg at rest). Asymptomatic patients with new-onset atrial fibrillation or pulmonary hypertension are also candidates. [Ref 1]
4. Severe mitral stenosis (valve area ≤1.5 cm²) becomes high risk when symptoms occur, when pulmonary artery systolic pressure exceeds 50 mm Hg, or when there is new atrial fibrillation; percutaneous mitral balloon valvotomy or surgery is recommended. [Ref 1]
5. Always consider frailty, comorbidities and patient preferences; refer to a multidisciplinary Heart Valve Team for individualized decision making. [Ref 1]

## Key Numbers
- Aortic stenosis: valve area <1 cm² and mean gradient ≥40 mm Hg define severe stenosis; symptom onset portends ~50 % mortality at 2 years without intervention. [Ref 1]
- Severe aortic regurgitation: LVEF ≤55 % or LV end-systolic diameter ≥50 mm are surgical thresholds. [Ref 1]
- Mitral regurgitation: LVEF <60 % or left ventricular end-systolic diameter ≥40 mm indicate need for surgery even if asymptomatic. [Ref 1]

## Teaching Pearl
High-risk features may be present despite minimal symptoms. Regular surveillance echocardiography detects early changes in ventricular size and function; timely referral for intervention improves outcomes. [Ref 1]

## Boards + Bedside Tie-In
Exams often test numeric thresholds for severe valvular disease and indications for surgery. In practice, recognizing these thresholds and referring early to a valve team can prevent irreversible myocardial damage and improve survival.

## References
1. Otto CM, Nishimura RA, Bonow RO, et al. 2020 ACC/AHA guideline for the management of patients with valvular heart disease: executive summary. *Circulation.* 2021;143(5):e35-e71. doi:10.1161/CIR.0000000000000932 PMID: 33332149.
2. Mack MJ, Leon MB, Thourani VH, et al. Transcatheter aortic-valve replacement with a balloon-expandable valve in low-risk patients. *N Engl J Med.* 2019;380(18):1695-1705. doi:10.1056/NEJMoa1814052 PMID: 30883058.

---

# Hypertensive Emergency vs Urgency

## Clinical Setup
A 58-year-old woman presents to the emergency department with blood pressure 210/130 mm Hg but denies headache, visual changes or chest pain. Her exam is unremarkable and labs show normal creatinine. How do we differentiate hypertensive urgency from emergency, and what is the appropriate management?

## Teaching Objectives
- Distinguish hypertensive emergency from urgency based on presence of target-organ damage
- Implement safe blood pressure reduction strategies in each scenario

## Teaching Points
1. Hypertensive emergency is defined as severe blood pressure elevation (usually systolic ≥180 mm Hg or diastolic ≥120 mm Hg) with acute hypertension-mediated organ damage such as encephalopathy, intracerebral hemorrhage, acute ischemic stroke, acute coronary syndrome, acute heart failure, or acute kidney injury. Hypertensive urgency involves similar blood pressure levels but without target-organ damage. [Ref 1]
2. In hypertensive emergency, reduce mean arterial pressure by no more than 25 % within the first hour using intravenous agents (nicardipine, clevidipine, labetalol) and monitor closely; excessive rapid lowering risks cerebral or myocardial ischemia. [Ref 1]
3. Hypertensive urgencies do not require immediate IV therapy; blood pressure can be lowered gradually over 24–48 hours with oral medications (e.g., ACEI, calcium channel blockers) and close outpatient follow-up. [Ref 1]
4. Evaluate for secondary causes (pheochromocytoma, substance withdrawal, preeclampsia) and screen for end-organ injury with neurologic exam, funduscopic exam, urinalysis, creatinine, troponin and chest X-ray. [Ref 2]
5. Avoid sublingual nifedipine or immediate-release oral agents due to risk of precipitous blood pressure drops and ischemia; treatment should be tailored to the specific organ injury (e.g., aortic dissection requires rapid BP reduction to systolic 100–120 mm Hg with beta-blocker plus vasodilator). [Ref 1]

## Key Numbers
- Definition of severe hypertension: systolic ≥180 mm Hg or diastolic ≥120 mm Hg. [Ref 1]
- Initial BP reduction in hypertensive emergency: lower mean arterial pressure by up to 25 % in the first hour, then to 160/100 mm Hg over the next 2–6 hours. [Ref 1]
- In hypertensive urgency, BP should be lowered gradually to <160/100 mm Hg over 24–48 hours with oral agents. [Ref 1]

## Teaching Pearl
The term “hypertensive urgency” is being replaced by “severely elevated blood pressure without acute target-organ damage.” Many patients with severe asymptomatic hypertension can be managed safely as outpatients; focus on medication adherence, follow-up and addressing chronic hypertension. [Ref 1]

## Boards + Bedside Tie-In
Exams may ask you to recognize hypertensive emergencies and choose the appropriate IV agent. In clinical practice, rapidly identifying target-organ damage and tailoring therapy prevents morbidity and mortality.

## References
1. Bress AP, Anderson TS, Flack JM, et al. The management of elevated blood pressure in the acute care setting: a scientific statement from the American Heart Association. *Hypertension.* 2024;81(8):e94-e106. doi:10.1161/HYP.0000000000000238 PMID: 38804130.
2. Whelton PK, Carey RM, Aronow WS, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA guideline for the prevention, detection, evaluation, and management of high blood pressure in adults. *Hypertension.* 2018;71(6):e13-e115. doi:10.1161/HYP.0000000000000065 PMID: 29133356.

`;

// --- DATA: WEEK 2 (Pulmonology & Renal) ---
const WEEK_2_MARKDOWN = `# COPD Exacerbation: Severity and Treatment

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
- High-concentration oxygen (>6 L/min via non-rebreather) increases mortality in COPD exacerbations (number needed to harm approximately 14) [Ref 2]

## Common Pitfall
Using high-concentration oxygen or failing to titrate oxygen causes worsening hypercapnia and increased mortality in COPD exacerbations. Always titrate oxygen to the 88-92% target and reassess arterial blood gases to prevent CO2 narcosis [Ref 2].

## Boards + Bedside Tie-In
Exam questions often test recognition of COPD exacerbation severity and appropriate use of steroids and antibiotics. Clinically, being able to classify an exacerbation and deliver a standardized bundle (bronchodilators, controlled oxygen, short-course steroids and antibiotics) improves outcomes and reduces hospitalization.

## References
1. Carlin BW. Exacerbations of COPD. Respir Care. 2023;68(7):961-972. doi:10.4187/respcare.10782 PMID: 37353338
2. Pilcher J, Beasley R. Acute use of oxygen therapy. Aust Prescr. 2015;38(3):98-100. doi:10.18773/austprescr.2015.033 PMID: 26648631
3. Leuppi JD, Schuetz P, Bingisser R, et al. Short-term vs conventional glucocorticoid therapy in acute exacerbations of chronic obstructive pulmonary disease: The REDUCE randomized clinical trial. JAMA. 2013;309(21):2223-2231. doi:10.1001/jama.2013.5023 PMID: 23695200

---

# Asthma Exacerbation: Inpatient Management

## Clinical Setup
A 30-year-old man with a history of asthma presents with wheezing and shortness of breath after exposure to a friend's cat. In the emergency department he requires repeated albuterol nebulizations and supplemental oxygen to maintain an oxygen saturation of 94%. What medications and monitoring are indicated in the first 24 hours?

## Teaching Objectives
- Manage moderate to severe asthma exacerbations using inhaled bronchodilators, systemic steroids and adjunctive therapies
- Recognize appropriate oxygen saturation targets and avoid unnecessary investigations or medications

## Teaching Points
1. Begin with repeated short-acting beta2-agonist (e.g., albuterol) therapy and add inhaled anticholinergics (ipratropium) for moderate to severe attacks; early frequent dosing improves lung function and reduces hospital admissions [Ref 1].
2. Start systemic corticosteroids promptly (e.g., oral prednisolone 40-50 mg daily for 5-7 days for adults or 1-2 mg/kg up to 40 mg for children) to reduce inflammation and prevent relapse; tapering is unnecessary for courses under 2 weeks [Ref 1].
3. Provide controlled oxygen to maintain saturations 93-95% in adults (94-98% in children); avoid both hypoxia and hyperoxia and continuously monitor saturation [Ref 1].
4. Consider intravenous magnesium sulfate (2 g over 20 minutes) for severe exacerbations unresponsive to initial bronchodilators and steroids; it relaxes airway smooth muscle and can avert intubation [Ref 1].
5. Do not routinely order chest radiographs, arterial blood gases, antibiotics or sedatives unless complications (e.g., pneumothorax, infection) are suspected; unnecessary tests can delay care and increase costs [Ref 1].

## Key Numbers
- Prednisolone dose: 40-50 mg daily for 5-7 days in adults; 1-2 mg/kg (max 40 mg) for 3-5 days in children [Ref 1]
- Oxygen saturation target: 93-95% (adults) or 94-98% (children) [Ref 1]
- Intravenous magnesium sulfate 2 g over 20 minutes for severe exacerbations [Ref 1]

## Teaching Pearl
Early administration of systemic corticosteroids (ideally within the first hour of presentation) shortens the duration of the exacerbation and reduces the need for hospitalization. Delay beyond two hours is associated with longer hospital stays and higher relapse rates [Ref 1].

## Boards + Bedside Tie-In
Exams often query the sequencing of therapies in severe asthma. At the bedside, a mental checklist (SABA, ipratropium, steroids, oxygen titration, consider magnesium) ensures essential therapies are delivered promptly while avoiding unnecessary tests.

## References
1. Global Initiative for Asthma (GINA). Global strategy for asthma management and prevention. 2023 Report. Available from: https://ginasthma.org
2. Alangari A, Alhazzani W, Al-Mahdi M. Management of asthma exacerbation in the emergency departments. Int J Pediatr Adolesc Med. 2019;6(3):109-114. doi:10.1016/j.ijpam.2019.07.001 PMID: 31388549

---

# Oxygen Delivery Systems and Targets

## Clinical Setup
A 55-year-old man with pneumonia is hypoxic, with oxygen saturation of 88% on room air. You need to choose an appropriate oxygen delivery device and target saturation range. How do you match devices to patient needs and set appropriate goals?

## Teaching Objectives
- Compare common oxygen delivery devices and select an appropriate device based on flow requirements
- Specify target oxygen saturation ranges for different patient populations

## Teaching Points
1. Low-flow nasal cannula delivers 1-6 L/min with a fraction of inspired oxygen (FiO2) of approximately 24-44%; it is comfortable and suitable for patients needing modest oxygen supplementation [Ref 1].
2. Simple face masks require 6-10 L/min to avoid rebreathing CO2 and provide FiO2 around 28-50%; non-rebreather masks deliver 10-15 L/min with FiO2 up to 60-80% for short-term use in severe hypoxemia [Ref 1].
3. High-flow nasal oxygen systems deliver up to 60 L/min and 100% FiO2 with heated, humidified gas; they improve mucociliary clearance and can provide low levels of positive end-expiratory pressure [Ref 1].
4. For most acutely ill patients without chronic hypercapnia, target oxygen saturation is 94-98%; in patients at risk of hypercapnic respiratory failure (e.g., COPD, severe obesity-hypoventilation) target 88-92% to avoid worsening hypercapnia [Ref 2].
5. Oxygen is a drug that should be prescribed with a target saturation range; reassess saturations and arterial blood gases after initiating therapy and adjust device or flow accordingly [Ref 2].

## Key Numbers
- Nasal cannula: 1-6 L/min, FiO2 24-44% [Ref 1]
- Simple mask: 6-10 L/min, FiO2 28-50%; non-rebreather: 10-15 L/min, FiO2 60-80% [Ref 1]
- High-flow nasal oxygen: up to 60 L/min, FiO2 21-100% [Ref 1]

## Common Pitfall
Failing to set a target saturation range leads to both hypoxemia and hyperoxia. Hyperoxia can cause vasoconstriction and increased oxidative stress, while uncontrolled high-flow oxygen in COPD precipitates CO2 retention. Always write an order with the device, flow rate and target SpO2 range [Ref 2].

## Boards + Bedside Tie-In
Exams frequently test the differences among oxygen delivery devices and appropriate SpO2 targets in COPD versus other conditions. Clinically, understanding flow capabilities and FiO2 helps you select the right device and titrate therapy safely for your patient.

## References
1. O'Driscoll BR, Howard LS, Earis J, Mak V. British Thoracic Society guideline for oxygen use in adults in healthcare and emergency settings. BMJ Open Respir Res. 2017;4(1):e000170. doi:10.1136/bmjresp-2016-000170 PMID: 28883921
2. Siemieniuk RAC, Chu DK, Kim LH, et al. Oxygen therapy for acutely ill medical patients: a clinical practice guideline. BMJ. 2018;363:k4169. doi:10.1136/bmj.k4169 PMID: 30355567

---

# Noninvasive Respiratory Support: Device Selection

## Clinical Setup
An 80-year-old man with a history of chronic heart failure develops acute pulmonary edema with respiratory distress and oxygen saturation of 82% despite 15 L/min via non-rebreather mask. He is hemodynamically stable but tachypneic. How do you choose among high-flow nasal oxygen, continuous positive airway pressure (CPAP) and bilevel positive airway pressure (BiPAP)?

## Teaching Objectives
- Differentiate indications for CPAP, BiPAP and high-flow nasal therapy in acute respiratory failure
- Recognize the evidence-based benefits and limitations of noninvasive ventilation

## Teaching Points
1. High-flow nasal therapy (HFNT) delivers warmed, humidified oxygen at 30-60 L/min and is first-line for de novo acute hypoxemic respiratory failure (e.g., pneumonia, COVID-19) because it improves oxygenation and patient comfort; it may also reduce intubation rates compared with conventional oxygen [Ref 1].
2. CPAP provides continuous positive airway pressure via facemask and is indicated for cardiogenic pulmonary edema or obstructive sleep apnea exacerbations; it recruits alveoli and reduces preload and afterload, improving oxygenation [Ref 1].
3. BiPAP (bilevel positive airway pressure) delivers separate inspiratory and expiratory pressures and is preferred for hypercapnic respiratory failure with respiratory acidosis, such as COPD exacerbations, to decrease work of breathing and CO2 levels [Ref 1].
4. A meta-analysis of noninvasive ventilation demonstrated that noninvasive positive pressure ventilation significantly reduces the need for intubation and ICU mortality compared with conventional therapy; however, benefits for hospital mortality or length of stay were not statistically significant [Ref 2].
5. Contraindications to noninvasive ventilation include hemodynamic instability, inability to protect the airway, severe encephalopathy and facial trauma; early identification of failure and timely intubation are critical [Ref 1].

## Key Numbers
- HFNT flow range: 30-60 L/min, FiO2 up to 100% [Ref 1]
- Pooled risk ratio for intubation with noninvasive ventilation: 0.43 (95% CI 0.32-0.57) compared with conventional therapy [Ref 2]
- Pooled risk ratio for mortality reduction: 0.55 (95% CI 0.40-0.78) compared with conventional therapy [Ref 2]

## Teaching Pearl
Selecting the appropriate device is driven by the underlying pathophysiology: HFNT for hypoxemic respiratory failure, CPAP for cardiogenic edema or hypoxic COVID-19, and BiPAP for hypercapnic states. Starting the wrong modality delays effective therapy and increases risk of intubation [Ref 1].

## Boards + Bedside Tie-In
Knowledge of noninvasive ventilation indications and contraindications is increasingly tested on board exams. At the bedside, early application of the appropriate modality, coupled with close monitoring for improvement, can avert invasive ventilation and reduce ICU mortality.

## References
1. Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017;50(2):1602426. doi:10.1183/13993003.02426-2016 PMID: 28860265
2. Masip J, Roque M, Sánchez B, et al. Noninvasive ventilation in acute cardiogenic pulmonary edema: systematic review and meta-analysis. JAMA. 2005;294(24):3124-3130. doi:10.1001/jama.294.24.3124 PMID: 16380593

---

# Pleural Effusion: Diagnostic Approach

## Clinical Setup
A 62-year-old woman with a history of congestive heart failure presents with dyspnea. Chest radiograph shows a moderate left-sided pleural effusion. How do you determine whether the effusion is transudative or exudative, and what diagnostic studies should be ordered?

## Teaching Objectives
- Apply Light's criteria to classify pleural fluid and guide management
- Identify essential diagnostic tests and recognize when additional tests (e.g., NT-proBNP) are needed

## Teaching Points
1. Perform thoracentesis unless heart failure is strongly suspected and the effusion resolves with diuresis; send pleural fluid for protein, lactate dehydrogenase (LDH), pH, glucose, cell count with differential and Gram stain/culture [Ref 1, 2].
2. Use Light's criteria to classify exudates: pleural fluid protein/serum protein ratio >0.5, pleural fluid LDH/serum LDH ratio >0.6, or pleural LDH >2/3 the upper limit of normal; meeting any criterion identifies an exudate [Ref 1].
3. Transudates are typically due to heart failure, cirrhosis or nephrotic syndrome; exudates result from infection, malignancy or inflammatory conditions and often require further evaluation such as cytology or pleural biopsy [Ref 1].
4. Light's criteria may misclassify some heart failure effusions as exudates after diuresis; measurement of serum-pleural fluid albumin or protein gradients or NT-proBNP can improve diagnostic accuracy in suspected cardiac cases [Ref 2].
5. A pleural fluid pH <7.2 or glucose <60 mg/dL suggests complicated parapneumonic effusion or empyema and mandates prompt chest tube drainage in addition to antibiotics [Ref 2].

## Key Numbers
- Pleural fluid protein/serum protein ratio >0.5 or LDH ratio >0.6 defines an exudate [Ref 1]
- Pleural pH <7.2 indicates the need for drainage of parapneumonic effusion [Ref 2]
- NT-proBNP >1,500 pg/mL in pleural fluid helps confirm heart failure-related effusions [Ref 2]

## Common Pitfall
Relying solely on chest radiographs or failing to analyze pleural fluid can lead to misclassification. Likewise, performing thoracentesis after diuresis may falsely elevate protein concentrations and label a transudate as an exudate. When heart failure is strongly suspected, consider checking serum-pleural albumin gradient or NT-proBNP before tapping [Ref 2].

## Boards + Bedside Tie-In
Board questions often ask about Light's criteria and the next step when an exudate is identified. Clinically, timely thoracentesis with appropriate fluid studies guides therapy and avoids missed diagnoses such as malignancy or empyema.

## References
1. Light RW, MacGregor MI, Luchsinger PC, Ball WC Jr. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med. 1972;77(4):507-513. doi:10.7326/0003-4819-77-4-507 PMID: 4642731
2. Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society Guideline for pleural disease. Thorax. 2023;78(11):1143-1156. doi:10.1136/thorax-2023-220304 PMID: 37553157

---

# AKI: Distinguishing Prerenal from Intrinsic

## Clinical Setup
A 77-year-old man presents with oliguria and rising serum creatinine after several days of vomiting and diarrhea. Laboratory studies show blood urea nitrogen (BUN) 60 mg/dL and creatinine 2.0 mg/dL. How can you differentiate prerenal azotemia from intrinsic acute kidney injury (AKI), and what initial management is indicated?

## Teaching Objectives
- Interpret laboratory indices such as fractional excretion of sodium (FENa) and urea (FEUrea) to distinguish prerenal from intrinsic AKI
- Initiate appropriate fluid resuscitation and avoid nephrotoxic agents while the cause is being identified

## Teaching Points
1. Prerenal AKI results from decreased renal perfusion (e.g., volume depletion, heart failure); intrinsic AKI results from tubular, glomerular or vascular injury. A FENa <1% suggests prerenal azotemia, while FENa >2% suggests intrinsic tubular injury [Ref 1].
2. FENa may be unreliable in patients on diuretics; in such cases calculate the fractional excretion of urea (FEUrea): values <35% suggest prerenal AKI, whereas values >50% suggest intrinsic AKI [Ref 1].
3. A BUN/creatinine ratio >20:1 supports prerenal AKI, whereas intrinsic renal injury often has a lower ratio due to impaired tubular reabsorption of urea [Ref 1].
4. Urinalysis aids differentiation: bland sediment and hyaline casts are common in prerenal states; muddy brown granular casts and tubular epithelial cells suggest acute tubular necrosis [Ref 1, 2].
5. Initial management includes discontinuing nephrotoxic medications, ensuring adequate hemodynamic support and administering isotonic crystalloid to restore perfusion; avoid excessive fluids if there is concern for cardiogenic shock [Ref 2].

## Key Numbers
- Fractional excretion of sodium (FENa) <1% indicates prerenal AKI; >2% suggests intrinsic AKI [Ref 1]
- Fractional excretion of urea (FEUrea) <35% suggests prerenal AKI; >50% suggests intrinsic AKI [Ref 1]
- BUN/Cr ratio >20:1 supports prerenal azotemia [Ref 1]

## Teaching Pearl
FENa calculations are inaccurate if diuretics were recently administered. In such cases, FEUrea provides a more reliable index for distinguishing prerenal azotemia from intrinsic AKI [Ref 1].

## Boards + Bedside Tie-In
Exam questions often require interpretation of FENa, FEUrea and urinalysis to localize the site of AKI. Clinically, differentiating prerenal from intrinsic AKI guides management: volume repletion reverses prerenal azotemia, whereas intrinsic injury may require nephrology consultation and avoidance of further insults.

## References
1. Mercado MG, Smith DK, McConnon ML. Acute kidney injury: diagnosis and management. Am Fam Physician. 2019;100(11):687-694. PMID: 31790176
2. Kellum JA, Lameire N; KDIGO AKI Guideline Work Group. Diagnosis, evaluation, and management of acute kidney injury: a KDIGO summary (Part 1). Crit Care. 2013;17(1):204. doi:10.1186/cc11454 PMID: 23394211

---

# Contrast-Induced Nephropathy: Prevention

## Clinical Setup
A 70-year-old woman with chronic kidney disease stage 3 is scheduled for coronary angiography. Her creatinine is 1.6 mg/dL and she takes lisinopril and metformin. What strategies can minimize her risk of contrast-induced acute kidney injury (CI-AKI)?

## Teaching Objectives
- Implement evidence-based prophylactic measures to prevent CI-AKI
- Identify medications that should be withheld or initiated around the time of contrast exposure

## Teaching Points
1. Use isotonic saline (0.9% sodium chloride) at 1-1.5 mL/kg/h for 3-12 hours before and 6-24 hours after contrast exposure; periprocedural hydration is the most effective prophylaxis [Ref 1].
2. Avoid nephrotoxic agents (non-steroidal anti-inflammatory drugs, aminoglycosides), and hold renin-angiotensin system inhibitors and diuretics on the day of the procedure when feasible; ensure adequate hydration before resuming [Ref 1].
3. High-dose statin therapy (e.g., atorvastatin 80 mg) should be initiated or intensified because statins have pleiotropic renal protective effects with low risk [Ref 1].
4. Goal-directed hydration using left ventricular end-diastolic pressure or urine flow measurements (POSEIDON strategy) can reduce CI-AKI compared with fixed-rate fluids (incidence 6.7% vs 16.3%) [Ref 2].
5. Sodium bicarbonate solutions and N-acetylcysteine have not shown benefit over isotonic saline in large trials and are not recommended as sole preventive therapies; their routine use is discouraged [Ref 1].

## Key Numbers
- Isotonic saline rate: 1-1.5 mL/kg/h for 3-12 hours pre-procedure and 6-24 hours post-procedure [Ref 1]
- Goal-directed hydration (POSEIDON trial): CI-AKI 6.7% vs 16.3% with standard hydration [Ref 2]
- High-dose statin therapy reduces risk of CI-AKI and is cost-effective [Ref 1]

## Common Pitfall
Using sodium bicarbonate infusion or N-acetylcysteine alone without adequate hydration does not prevent CI-AKI. Reliance on these interventions may provide false reassurance and delay effective prophylaxis [Ref 1].

## Boards + Bedside Tie-In
Board exams may test the relative efficacy of hydration strategies and the lack of benefit from bicarbonate or N-acetylcysteine. Clinically, careful pre-procedural assessment and isotonic fluid administration are the mainstays of prevention, especially in high-risk patients with chronic kidney disease.

## References
1. Sůva M, Kala P, Polansky P, et al. Contrast-induced acute kidney injury and its contemporary prevention. Front Cardiovasc Med. 2022;9:1073072. doi:10.3389/fcvm.2022.1073072 PMID: 36561776
2. Brar SS, Aharonian V, Mansukhani P, et al. Haemodynamic-guided fluid administration for the prevention of contrast-induced acute kidney injury: the POSEIDON randomised controlled trial. Lancet. 2014;383(9931):1814-1823. doi:10.1016/S0140-6736(14)60689-9 PMID: 24856027

---

# CKD Complications: What to Monitor

## Clinical Setup
A 64-year-old man with chronic kidney disease (CKD) stage 3b and diabetes comes for routine follow-up. His estimated glomerular filtration rate (eGFR) is 40 mL/min/1.73 m2. What laboratory tests and clinical parameters should be monitored to detect complications and slow CKD progression?

## Teaching Objectives
- Identify key laboratory and clinical parameters to monitor in patients with CKD stages 3-5
- Recognize interventions that reduce cardiovascular and renal risk in CKD

## Teaching Points
1. Check serum creatinine and eGFR at least twice yearly to monitor disease progression; assess urinary albumin-to-creatinine ratio annually to detect albuminuria and adjust therapy accordingly [Ref 1, 2].
2. Monitor hemoglobin annually for anemia beginning at CKD stage 3; evaluate for iron deficiency and consider erythropoiesis-stimulating agents when hemoglobin is less than 10 g/dL and iron stores are adequate [Ref 2].
3. Assess calcium, phosphate, parathyroid hormone (PTH) and 25-hydroxyvitamin D levels in CKD stages 3a-5 to detect mineral bone disorder; treat with dietary phosphate restriction, vitamin D analogues and calcimimetics as indicated [Ref 2].
4. Optimize blood pressure control to less than 140/90 mmHg or less than 120 mmHg if tolerated using renin-angiotensin system inhibitors and sodium-glucose cotransporter 2 (SGLT2) inhibitors; both slow progression of diabetic and non-diabetic CKD [Ref 2].
5. Avoid nephrotoxic agents and contrast media; use caution with medications cleared by the kidney (e.g., metformin) and adjust doses based on eGFR [Ref 1].

## Key Numbers
- Annual hemoglobin measurement starting at CKD stage 3 [Ref 2]
- Target blood pressure: less than 140/90 mmHg; consider less than 120 mmHg if tolerated [Ref 2]
- SGLT2 inhibitors reduce risk of kidney disease progression and cardiovascular events in CKD [Ref 2]

## Teaching Pearl
Bone-mineral disorder often begins early in CKD; monitoring PTH, calcium, phosphate and vitamin D allows timely initiation of phosphate binders or calcimimetics, reducing fracture risk and vascular calcification [Ref 2].

## Boards + Bedside Tie-In
Board questions emphasize recognition of CKD complications such as anemia, bone-mineral disorder and cardiovascular risk. In practice, regular monitoring and optimization of blood pressure, glycemic control and medication dosing are key to slowing progression and improving patient outcomes.

## References
1. Mercado MG, Smith DK, McConnon ML. Acute kidney injury: diagnosis and management. Am Fam Physician. 2019;100(11):687-694. PMID: 31790176
2. Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 clinical practice guideline for the evaluation and management of chronic kidney disease. Kidney Int. 2024;105(4S):S117-S314. doi:10.1016/j.kint.2023.10.018 PMID: 38490803

---

# Indications for Urgent Dialysis

## Clinical Setup
A 58-year-old man admitted with sepsis develops oliguric AKI with creatinine rising from 1.0 to 4.5 mg/dL over two days. He is now confused with potassium 6.8 mEq/L, peaked T waves on ECG, and arterial pH 7.05. When should renal replacement therapy be initiated?

## Teaching Objectives
- Recognize absolute and relative indications for urgent renal replacement therapy in acute kidney injury
- Apply the AEIOU mnemonic to remember emergent indications for dialysis

## Teaching Points
1. Acidosis: Refractory metabolic acidosis (pH <7.1 despite bicarbonate therapy) warrants dialysis to remove acid and restore acid-base balance [Ref 1].
2. Electrolyte abnormalities: Severe hyperkalemia (K >6 mEq/L or with electrocardiographic changes) or other life-threatening electrolyte disturbances require immediate dialysis [Ref 1].
3. Ingestion: Dialyzable toxin ingestions (e.g., lithium, ethylene glycol, methanol, salicylates) are indications for urgent dialysis [Ref 1].
4. Overload: Pulmonary edema or refractory fluid overload despite diuretics necessitates dialysis to remove excess volume [Ref 1].
5. Uremia: Clinical manifestations such as encephalopathy, seizures, pericarditis or significant bleeding due to platelet dysfunction are indications for urgent dialysis; a blood urea nitrogen >100 mg/dL, even without symptoms, is often used as a threshold [Ref 1].

## Key Numbers
- Hyperkalemia threshold: >6 mEq/L with ECG changes requires dialysis [Ref 1]
- Severe acidosis: pH <7.1 despite bicarbonate therapy indicates dialysis [Ref 1]
- BUN >100 mg/dL may warrant dialysis even in absence of symptoms [Ref 1]

## Teaching Pearl
The AEIOU mnemonic summarizes emergent indications for dialysis: Acidosis, Electrolytes, Ingestion, Overload, Uremia. Recognizing these conditions and initiating timely renal replacement therapy can be life-saving [Ref 1].

## Boards + Bedside Tie-In
Exams frequently use case scenarios with hyperkalemia or uremic encephalopathy to test dialysis indications. In real life, early consultation with nephrology and prompt initiation of dialysis based on AEIOU criteria prevent catastrophic complications.

## References
1. Gaudry S, Hajage D, Schortgen F, et al. Initiation strategies for renal-replacement therapy in the intensive care unit. N Engl J Med. 2016;375(2):122-133. doi:10.1056/NEJMoa1603017 PMID: 27181456
2. Kellum JA, Lameire N; KDIGO AKI Guideline Work Group. Diagnosis, evaluation, and management of acute kidney injury: a KDIGO summary (Part 1). Crit Care. 2013;17(1):204. doi:10.1186/cc11454 PMID: 23394211

---

# Medication-Induced Nephrotoxicity: Prevention

## Clinical Setup
A 72-year-old woman with hypertension and osteoarthritis is prescribed ibuprofen and started on an ACE inhibitor and a diuretic for hypertension. One week later she develops fatigue and reduced urine output; her creatinine rises from 1.2 to 2.5 mg/dL. How can medication-induced nephrotoxicity be prevented and recognized early?

## Teaching Objectives
- Identify risk factors and high-risk drug combinations that predispose patients to nephrotoxicity
- Implement strategies to prevent nephrotoxicity and monitor renal function during drug therapy

## Teaching Points
1. Advanced age (>60 years), baseline renal insufficiency, volume depletion, diabetes mellitus, congestive heart failure and sepsis increase susceptibility to drug-induced nephrotoxicity; minimize nephrotoxin exposure in these populations [Ref 1, 2].
2. The "triple whammy" of non-steroidal anti-inflammatory drugs (NSAIDs), ACE inhibitors or angiotensin receptor blockers (ARBs), and diuretics can cause synergistic declines in glomerular filtration; avoid this combination when possible or monitor closely [Ref 1].
3. Obtain baseline serum creatinine and estimate glomerular filtration rate before starting potentially nephrotoxic drugs (e.g., aminoglycosides, amphotericin B, calcineurin inhibitors); adjust doses based on renal function and monitor serum levels when appropriate [Ref 2].
4. Ensure adequate hydration and correct modifiable risk factors (hypotension, hypovolemia); avoid concomitant use of multiple nephrotoxic agents and limit duration of therapy; regularly monitor creatinine, BUN and urine output during treatment [Ref 1].
5. Early recognition of rising creatinine or decreasing urine output should prompt dose adjustment or discontinuation of the offending drug to prevent progression to severe AKI; most drug-induced nephrotoxicity is reversible if caught early [Ref 2].

## Key Numbers
- Advanced age (>60 years) and pre-existing renal disease significantly increase risk of nephrotoxicity [Ref 1]
- "Triple whammy" (NSAID + ACE/ARB + diuretic) is the most common drug combination causing AKI [Ref 1]
- Monitoring renal function every 48-72 hours after initiating high-risk drugs helps detect toxicity early [Ref 2]

## Common Pitfall
Prescribing NSAIDs in patients on ACE inhibitors and diuretics without counseling on hydration or monitoring renal function leads to rapid decline in glomerular filtration rate. Always review medication lists and educate patients to avoid over-the-counter NSAIDs [Ref 1].

## Boards + Bedside Tie-In
Examinations often ask about drug combinations that precipitate AKI. In practice, vigilant review of the medication list, avoidance of nephrotoxin combinations and regular monitoring of renal function protect patients from iatrogenic kidney injury.

## References
1. Naughton CA. Drug-induced nephrotoxicity. Am Fam Physician. 2008;78(6):743-750. PMID: 18819242
2. Perazella MA. Drug-induced acute kidney injury: diverse mechanisms of tubular injury. Curr Opin Crit Care. 2019;25(6):550-557. doi:10.1097/MCC.0000000000000653 PMID: 31483318

---

# IV Fluid Selection: Saline vs Balanced Solutions

## Clinical Setup
A 65-year-old man admitted for sepsis has received 3 L of normal saline for resuscitation and now develops metabolic acidosis with a serum chloride of 115 mEq/L and worsening creatinine. You consider switching to a balanced crystalloid solution. What evidence guides the choice between saline and balanced fluids?

## Teaching Objectives
- Compare the effects of normal saline and balanced crystalloid solutions on renal outcomes
- Apply evidence from clinical trials to fluid resuscitation in critically ill and non-critically ill patients

## Teaching Points
1. Normal saline contains 154 mEq/L of chloride; large volumes can cause hyperchloremic metabolic acidosis and renal vasoconstriction leading to decreased glomerular filtration rate [Ref 1].
2. Balanced crystalloid solutions (e.g., lactated Ringer's, Plasma-Lyte) have electrolyte compositions closer to plasma and lower chloride content; they may reduce risk of acute kidney injury and electrolyte disturbances [Ref 1].
3. In the SALT-ED trial of noncritically ill adults receiving intravenous fluids in the emergency department, balanced crystalloids reduced the incidence of major adverse kidney events within 30 days compared with saline (4.7% vs 5.6%; adjusted odds ratio 0.82) without affecting hospital-free days [Ref 2].
4. The SMART trial in critically ill patients found a similar absolute risk reduction of 1.1% for major adverse kidney events with balanced fluids compared with saline and no significant difference in mortality, suggesting a modest renal benefit [Ref 3].
5. Current guidelines suggest using balanced crystalloids for fluid resuscitation in most adults, especially those at risk for kidney injury or requiring large volumes; normal saline remains appropriate for patients with traumatic brain injury or hyponatremia because of its higher sodium content [Ref 1].

## Key Numbers
- Major adverse kidney events within 30 days: 4.7% with balanced crystalloids vs 5.6% with saline (adjusted OR 0.82) [Ref 2]
- Absolute risk reduction for AKI in critically ill patients: approximately 1.1% with balanced crystalloids [Ref 3]
- Normal saline chloride concentration: 154 mEq/L; Plasma-Lyte chloride: 98 mEq/L [Ref 1]

## Teaching Pearl
Although the absolute risk reduction for kidney injury with balanced fluids is small, the potential benefit and low cost make them the default choice for most resuscitations. However, normal saline remains appropriate in circumstances such as traumatic brain injury, severe hyponatremia or metabolic alkalosis [Ref 1].

## Boards + Bedside Tie-In
Board questions may focus on trial results comparing saline and balanced solutions. At the bedside, awareness of the modest renal benefits and specific contraindications guides choice of crystalloid therapy in critically ill and emergency patients.

## References
1. Mercado MG, Smith DK, McConnon ML. Acute kidney injury: diagnosis and management. Am Fam Physician. 2019;100(11):687-694. PMID: 31790176
2. Self WH, Semler MW, Wanderer JP, et al. Balanced crystalloids versus saline in noncritically ill adults. N Engl J Med. 2018;378(9):819-828. doi:10.1056/NEJMoa1711586 PMID: 29485926
3. Semler MW, Self WH, Wanderer JP, et al; SMART Investigators. Balanced crystalloids versus saline in critically ill adults. N Engl J Med. 2018;378(9):829-839. doi:10.1056/NEJMoa1711584 PMID: 29485925

---

# Assessing Volume Status at the Bedside

## Clinical Setup
A 75-year-old woman with chronic heart failure is admitted for weakness and poor oral intake. She appears frail, with dry mucous membranes and mild pedal edema. You need to decide whether she is volume depleted or overloaded before administering fluids or diuretics.

## Teaching Objectives
- Integrate physical examination, laboratory tests and point-of-care ultrasound (POCUS) to assess volume status
- Recognize limitations of individual findings and use a multimodal approach for accuracy

## Teaching Points
1. Traditional physical exam findings include skin turgor, axillary sweat, mucous membrane dryness, orthostatic vital signs, jugular venous distension (JVD), pulmonary crackles and peripheral edema; no single sign is sensitive or specific for volume status [Ref 1].
2. Jugular venous pressure (JVP) is measured with the patient semi-recumbent at 30-45 degrees; add 5 cm to the vertical height of venous pulsation above the sternal angle. JVP >8 cm H2O suggests elevated central venous pressure (specificity 93-96%), while JVP <5 cm suggests low venous pressure (sensitivity 90%) [Ref 2].
3. Peripheral edema has low sensitivity for volume overload and may be present in hypoalbuminemia or venous insufficiency; bilateral crackles on lung exam have only approximately 51% sensitivity for pulmonary edema [Ref 2].
4. Laboratory tests such as serum B-type natriuretic peptide (BNP) and N-terminal pro-BNP aid in diagnosing volume overload (higher levels correlate with elevated filling pressures), but values are less reliable in renal failure or obesity; trending values can guide therapy [Ref 2].
5. Point-of-care ultrasound assessing the inferior vena cava diameter and collapsibility, lung B-lines and cardiac function provides dynamic information and is increasingly used to complement physical examination for volume assessment [Ref 1].

## Key Numbers
- JVP >8 cm H2O indicates elevated central venous pressure with specificity approximately 93-96% [Ref 2]
- JVP <5 cm H2O suggests low central venous pressure with sensitivity approximately 90% [Ref 2]
- Lung crackles for pulmonary edema have sensitivity approximately 51% [Ref 2]

## Teaching Pearl
No single clinical sign reliably determines volume status. Combining physical exam findings, laboratory markers and point-of-care ultrasound yields the most accurate assessment and prevents mismanagement of fluids or diuretics [Ref 1].

## Boards + Bedside Tie-In
Board questions may ask about the significance of JVP measurements or limitations of edema in assessing volume status. In clinical practice, integrating bedside ultrasound into the assessment improves accuracy and guides safe fluid or diuretic therapy.

## References
1. Miller A, Mandeville J. Predicting and measuring fluid responsiveness with echocardiography. Echo Res Pract. 2016;3(2):G1-G12. doi:10.1530/ERP-16-0008 PMID: 27249550
2. McGee S, Abernethy WB, Simel DL. Is this patient hypovolemic? JAMA. 1999;281(11):1022-1029. doi:10.1001/jama.281.11.1022 PMID: 10086438

---

# Hypernatremia: Workup and Management

## Clinical Setup
A 70-year-old nursing home resident with dementia is brought to the hospital for confusion and lethargy. Her serum sodium is 162 mEq/L. She has dry mucous membranes and decreased urine output. What is the appropriate approach to evaluating and managing her hypernatremia?

## Teaching Objectives
- Identify the underlying cause of hypernatremia and differentiate water deficit from sodium overload
- Initiate safe correction of hypernatremia while avoiding cerebral edema

## Teaching Points
1. Hypernatremia almost always reflects free water deficit; classify as hypovolemic, euvolemic or hypervolemic based on volume status. Hypovolemic hypernatremia results from unreplaced fluid losses (e.g., diarrhea, diuretics); euvolemic from diabetes insipidus; hypervolemic from sodium overload (e.g., hypertonic saline, sodium bicarbonate) [Ref 1, 2].
2. Calculate the free water deficit: Water deficit (L) approximately equals (current Na/140 minus 1) times body weight (kg) times 0.6 (men) or 0.5 (women). Replace half of the deficit in the first 24 hours and the rest over the next 24-48 hours [Ref 2].
3. Do not lower serum sodium by more than 10-12 mEq/L per 24 hours or 0.5 mEq/L per hour; rapid correction risks cerebral edema and seizures due to cerebral osmolyte accumulation [Ref 2].
4. Initial therapy for hypovolemic hypernatremia is isotonic fluid (0.9% saline) to restore hemodynamic stability; once euvolemic, switch to hypotonic solutions (e.g., 5% dextrose, half-normal saline) or enteral free water to replace the calculated deficit [Ref 1].
5. Monitor serum sodium every 2-4 hours and adjust infusion rates accordingly; treat underlying causes such as infection, diuretics or diabetes insipidus (with desmopressin) [Ref 2].

## Key Numbers
- Maximum sodium correction rate: 10-12 mEq/L or less per 24 hours (0.5 mEq/L or less per hour) [Ref 2]
- Replace half of calculated water deficit in first 24 hours and remainder over next 24-48 hours [Ref 2]
- Monitor serum sodium every 2-4 hours during correction [Ref 1]

## Common Pitfall
Rapid correction of chronic hypernatremia leads to cerebral edema and seizures. Conversely, failing to provide isotonic fluid before free water replacement in hypovolemic hypernatremia can worsen hemodynamic instability and kidney injury. Always restore intravascular volume first and correct sodium slowly [Ref 1, 2].

## Boards + Bedside Tie-In
Exams often present calculations of free water deficit and ask for appropriate fluid selection. Clinically, careful monitoring and gradual correction prevent neurologic complications while addressing the underlying cause of hypernatremia.

## References
1. Sterns RH. Disorders of plasma sodium: causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65. doi:10.1056/NEJMra1404489 PMID: 25551526
2. Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med. 2000;342(20):1493-1499. doi:10.1056/NEJM200005183422006 PMID: 10816188

---

# Hypercalcemia: Workup and Management

## Clinical Setup
A 58-year-old woman presents with fatigue, constipation and polyuria. Laboratory studies reveal total serum calcium 13.8 mg/dL and ionized calcium 1.7 mmol/L. Her parathyroid hormone (PTH) level is suppressed. How do you determine the cause of her hypercalcemia and initiate appropriate therapy?

## Teaching Objectives
- Differentiate PTH-mediated from non-PTH-mediated hypercalcemia using targeted laboratory tests
- Implement acute and chronic management strategies for severe hypercalcemia

## Teaching Points
1. Confirm hypercalcemia with ionized calcium and adjust total calcium for albumin. Measure intact PTH; elevated or inappropriately normal PTH suggests primary hyperparathyroidism or tertiary hyperparathyroidism (renal failure), whereas suppressed PTH indicates non-PTH-mediated hypercalcemia [Ref 1].
2. In non-PTH-mediated hypercalcemia, measure PTH-related peptide (PTHrP), 25-hydroxyvitamin D, 1,25-dihydroxyvitamin D and assess for malignancy, granulomatous diseases, thyrotoxicosis or medications (thiazides, lithium) [Ref 1].
3. Initial treatment includes aggressive isotonic saline hydration (usually 200-300 mL/h adjusted to achieve positive urine output) to correct volume depletion and enhance renal calcium excretion; once euvolemic, loop diuretics can promote calciuresis [Ref 2].
4. Administer intravenous bisphosphonates (e.g., zoledronic acid 4 mg or pamidronate 60-90 mg) for malignancy-associated hypercalcemia; onset occurs within 48 hours and effect lasts weeks; consider denosumab if refractory or with renal impairment [Ref 2, 3].
5. Calcitonin (4 IU/kg subcutaneously or intramuscularly every 12 hours) provides rapid, short-term reduction in serum calcium; glucocorticoids (prednisone 20-40 mg daily) are effective for vitamin D-mediated hypercalcemia (sarcoidosis) [Ref 2].

## Key Numbers
- Saline hydration rate: initiate at 200-300 mL/h to achieve positive fluid balance; adjust for heart failure [Ref 2]
- Calcitonin dose: 4 IU/kg every 12 hours; tachyphylaxis develops after 48 hours [Ref 2]
- Zoledronic acid dose: 4 mg IV over 15 minutes; pamidronate: 60-90 mg IV over 2 hours [Ref 2]

## Teaching Pearl
Always assess PTH level to distinguish PTH-mediated hypercalcemia from malignancy-associated or granulomatous causes. Adequate hydration is the cornerstone of acute management; loop diuretics should only be used after euvolemia is achieved to avoid worsening dehydration [Ref 2].

## Boards + Bedside Tie-In
Board questions emphasize distinguishing primary hyperparathyroidism from malignancy-related hypercalcemia and the appropriate use of bisphosphonates, calcitonin and hydration. Clinically, timely diagnosis and treatment prevent complications such as arrhythmias, nephrolithiasis and altered mental status.

## References
1. Bilezikian JP, Khan AA, Silverberg SJ, et al. Evaluation and management of primary hyperparathyroidism: summary statement and guidelines from the Fifth International Workshop. J Bone Miner Res. 2022;37(11):2293-2314. doi:10.1002/jbmr.4677 PMID: 36245251
2. Carroll MF, Schade DS. A practical approach to hypercalcemia. Am Fam Physician. 2003;67(9):1959-1966. PMID: 12751658
3. Seisa MO, Nayfeh T, Hasan B, et al. A systematic review supporting the Endocrine Society Clinical Practice Guideline on the treatment of hypercalcemia of malignancy in adults. J Clin Endocrinol Metab. 2023;108(3):585-591. doi:10.1210/clinem/dgac631 PMID: 36545700

---

# Metabolic Acidosis: The Anion Gap Approach

## Clinical Setup
A 45-year-old man with type 1 diabetes is found unconscious with rapid breathing. His serum sodium is 140 mEq/L, chloride 102 mEq/L and bicarbonate 10 mEq/L. How do you evaluate his metabolic acidosis using the anion gap and delta gap, and what additional tests are needed?

## Teaching Objectives
- Calculate the anion gap and interpret high- versus normal-gap metabolic acidosis
- Use the delta gap to identify mixed acid-base disorders and guide further workup

## Teaching Points
1. The anion gap (AG) is calculated as AG = Na minus (Cl + HCO3); normal range is 8-12 mEq/L. A high AG indicates accumulation of unmeasured acids (lactic acid, ketoacids, toxins), whereas a normal AG (hyperchloremic) acidosis results from bicarbonate loss (diarrhea, renal tubular acidosis) [Ref 1].
2. Causes of high AG metabolic acidosis can be remembered with the mnemonic "GOLD MARK": glycols (ethylene glycol, propylene glycol), oxoproline (acetaminophen metabolite), L-lactic acidosis, D-lactic acidosis, methanol, aspirin (salicylates), renal failure/rhabdomyolysis, ketoacidosis (diabetic, alcoholic, starvation) and toluene [Ref 1].
3. The delta gap assesses for mixed disorders: delta AG = (measured AG minus normal AG). Calculate the delta ratio = delta AG / (24 minus HCO3); a ratio 1-2 suggests pure high-AG acidosis, <1 indicates concomitant normal-AG acidosis, and >2 suggests concomitant metabolic alkalosis [Ref 1].
4. In normal-AG metabolic acidosis, check the urine anion gap (UAG = urine Na + urine K minus urine Cl). A negative UAG (less than minus 20) suggests gastrointestinal bicarbonate loss (diarrhea), whereas a positive UAG (>0) implies renal tubular acidosis due to impaired ammonium excretion [Ref 1].
5. Management focuses on identifying and treating the underlying cause (e.g., insulin and fluids for diabetic ketoacidosis, dialysis for toxin ingestion); bicarbonate therapy is reserved for severe metabolic acidosis with pH <7.1 in the absence of reversible causes [Ref 2].

## Key Numbers
- Normal anion gap: 8-12 mEq/L (using sodium only) [Ref 1]
- Delta ratio: 1-2 indicates pure high-AG acidosis; <1 suggests mixed high- and normal-gap acidosis; >2 suggests concurrent metabolic alkalosis [Ref 1]
- Urine anion gap: negative (less than minus 20) indicates gastrointestinal bicarbonate loss; positive (>0) suggests renal tubular acidosis [Ref 1]

## Teaching Pearl
Always calculate the delta ratio when confronted with high anion gap acidosis; it quickly reveals hidden mixed disorders. In normal anion gap acidosis, the urine anion gap differentiates renal from gastrointestinal causes [Ref 1].

## Boards + Bedside Tie-In
Board questions frequently require calculation of the anion gap and delta ratio to identify coexisting metabolic alkalosis or normal-gap acidosis. Clinically, a systematic approach to metabolic acidosis helps uncover occult ingestions or renal tubular disorders and guides targeted therapy.

## References
1. Kraut JA, Madias NE. Metabolic acidosis: pathophysiology, diagnosis and management. Nat Rev Nephrol. 2010;6(5):274-285. doi:10.1038/nrneph.2010.33 PMID: 20308999
2. Berend K, de Vries AP, Gans RO. Physiological approach to assessment of acid-base disturbances. N Engl J Med. 2014;371(15):1434-1445. doi:10.1056/NEJMra1003327 PMID: 25295502
`;

// --- DATA: WEEK 3 (Endocrinology & ID) ---
const WEEK_3_MARKDOWN = `# Inpatient Insulin Management Principles

## Clinical Setup
A 68-year-old man with type 2 diabetes is admitted for community-acquired pneumonia. On the second hospital day, his fasting blood glucose ranges from 200-240 mg/dL despite receiving a sliding-scale insulin regimen. What evidence-based strategy should be used to manage his inpatient glycemic control?

## Teaching Objectives
- Identify appropriate glycemic targets and treatment thresholds for non-critical hospitalized patients.
- Apply basal-bolus insulin regimens instead of sliding-scale therapy to improve outcomes.

## Teaching Points
1. Glycemic targets in non-critical inpatients are generally 100-180 mg/dL; treating mild elevations below 100 mg/dL may increase hypoglycemia without benefit. [Ref 3] Therapy is usually initiated if blood glucose exceeds 180 mg/dL on two occasions or exceeds 200 mg/dL once. [Ref 2]
2. Randomized trials comparing basal-bolus regimens with sliding-scale insulin found better glycemic control and fewer complications: mean daily glucose ~145 mg/dL versus 172 mg/dL and reduced composite complications (odds ratio 3.39) in the basal-bolus group. [Ref 1] Basal-bolus therapy uses a long-acting basal component plus scheduled prandial insulin with supplemental correction.
3. Sliding-scale insulin alone provides only reactive correction; it results in greater glycemic variability and is associated with increased infections and complications. [Ref 1] A basal-bolus regimen anticipates insulin needs and maintains steady background insulin.
4. Guidelines, including the ADA Standards of Care, endorse basal-bolus therapy and discourage sole reliance on sliding scales. [Ref 3]

## Key Numbers
- Target range for most non-critical inpatients: 100-180 mg/dL (5.6-10.0 mmol/L). [Ref 3]
- Basal-bolus trial: mean glucose 145 mg/dL vs 172 mg/dL with sliding scale; composite complications reduced (OR 3.39). [Ref 1]
- Initiate insulin therapy when blood glucose exceeds 180 mg/dL on two readings or exceeds 200 mg/dL once. [Ref 3]

## Common Pitfall
Relying solely on sliding-scale insulin can lead to reactive dosing, wide glucose swings and increased infectious complications. Transitioning to a scheduled basal-bolus regimen with correction doses improves glycemic control and reduces complications. [Ref 1]

## Boards + Bedside Tie-In
Board questions often compare sliding-scale to basal-bolus regimens. At the bedside, using a basal-bolus approach ensures steady basal insulin with scheduled prandial coverage; adjust doses daily based on nutritional intake and renal function. Patients with poor oral intake may require basal plus correction only.

## References
1. Umpierrez GE, Smiley D, Zisman A, et al. Randomized study of basal-bolus insulin therapy in the inpatient management of patients with type 2 diabetes. *Diabetes Care*. 2007;30(9):2181-2186. doi:10.2337/dc07-0295 PMID: 17513708.
2. Teles F, Miranda EP, Marchi S, et al. Screening and management of hospital hyperglycemia in non-critical patients: a position statement from the Brazilian Diabetes Society. *Diabetol Metab Syndr*. 2025;17:54. doi:10.1186/s13098-025-01585-z.
3. American Diabetes Association Professional Practice Committee. Diabetes care in the hospital: Standards of Care in Diabetes 2024. *Diabetes Care*. 2024;47(Suppl 1):S295-S306. doi:10.2337/dc24-S016 PMID: 38078585.

---

# DKA vs HHS: Key Differences in Management

## Clinical Setup
A 54-year-old woman with poorly controlled type 2 diabetes presents with polyuria and altered mentation. Her laboratory values show serum glucose 760 mg/dL, bicarbonate 10 mEq/L, pH 7.15 and moderate ketonuria. How do diabetic ketoacidosis (DKA) and hyperosmolar hyperglycemic state (HHS) differ in pathophysiology and management?

## Teaching Objectives
- Distinguish diagnostic criteria for DKA versus HHS.
- Outline major differences in fluid resuscitation, insulin initiation and monitoring for DKA versus HHS.

## Teaching Points
1. Diagnosis: DKA is characterized by blood glucose ≥250 mg/dL with metabolic acidosis (pH ≤7.3, bicarbonate ≤15 mEq/L) and moderate ketonuria or ketonemia. [Ref 1] HHS presents with glucose >600 mg/dL, minimal ketones, pH >7.3 and bicarbonate >15 mEq/L. Serum osmolality is usually >320 mOsm/kg in HHS. [Ref 2]
2. Fluid resuscitation: DKA often requires rapid isotonic saline boluses (15-20 mL/kg) followed by 0.45 % saline and early insulin therapy. [Ref 1] HHS patients have profound fluid deficits (100-220 mL/kg) and benefit from cautious, gradual resuscitation with 0.9 % saline; a fixed-rate insulin infusion should start only once osmolality stops rising. Rapid correction of hyperosmolarity increases risk of cerebral edema. [Ref 2]
3. Insulin therapy: DKA management uses regular insulin 0.1 U/kg IV bolus followed by 0.1 U/kg/h infusion (or continuous 0.14 U/kg/h without bolus). Insulin should be withheld if serum potassium is <3.5 mEq/L until potassium replacement. [Ref 1] In HHS, insulin infusion (0.05-0.1 U/kg/h) begins after initial fluids, and dextrose is added when glucose <250-300 mg/dL. [Ref 2]
4. Monitoring and resolution: DKA is considered resolved when glucose <200 mg/dL plus two of the following: bicarbonate ≥15 mEq/L, pH >7.3 and anion gap ≤12. [Ref 1, 3] HHS resolution includes osmolality <300 mOsm/kg, urine output ≥0.5 mL/kg/h, improved mental status and blood glucose <250-300 mg/dL. [Ref 2]

## Key Numbers
- DKA diagnostic threshold: blood glucose ≥250 mg/dL with pH ≤7.3 and bicarbonate ≤15 mEq/L. [Ref 1]
- HHS diagnostic threshold: blood glucose >600 mg/dL with pH >7.3 and bicarbonate >15 mEq/L; fluid deficit 100-220 mL/kg requiring gradual replacement. [Ref 2]
- Insulin regimen in DKA: 0.1 U/kg IV bolus then 0.1 U/kg/h infusion, or 0.14 U/kg/h continuous; add dextrose when glucose 200-250 mg/dL and reduce insulin to 0.05 U/kg/h. [Ref 1]

## Common Pitfall
Treating HHS like DKA by initiating insulin without adequate fluid resuscitation can worsen circulatory collapse. [Ref 2] Conversely, correcting osmolality too quickly in HHS may precipitate cerebral edema. [Ref 2]

## Boards + Bedside Tie-In
Exams test recognition of DKA versus HHS and proper sequencing of therapy. At the bedside, confirm diagnosis with venous blood gas and basic metabolic panel, replace fluids aggressively for DKA but cautiously for HHS, and monitor electrolytes and mental status closely. Always correct potassium and measure serum osmolality to guide therapy.

## References
1. Kitabchi AE, Umpierrez GE, Miles JM, Fisher JN. Hyperglycemic crises in adult patients with diabetes. *Diabetes Care*. 2009;32(7):1335-1343. doi:10.2337/dc09-9032 PMID: 19564476.
2. Joint British Diabetes Societies for Inpatient Care. Management of hyperosmolar hyperglycaemic state (HHS) in adults: an updated guideline from JBDS. *Diabet Med*. 2023;40(3):e15005. doi:10.1111/dme.15005 PMID: 36370077.
3. Lizzo JM, Beyer A, Umpierrez GE. Adult diabetic ketoacidosis. In: *StatPearls* [Internet]. Treasure Island, FL: StatPearls Publishing; 2025.
4. Korytkowski MT, Muniyappa R, Antinori-Lent K, et al. Management of hyperglycemia in hospitalized adult patients in non-critical care settings: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2022;107(8):2101-2128. doi:10.1210/clinem/dgac278 PMID: 35690958.

---

# Hypoglycemia Workup in Non-Diabetics

## Clinical Setup
A 42-year-old otherwise healthy woman presents with episodic confusion, tremors and diaphoresis that improve after drinking juice. During one episode, her venous glucose is 48 mg/dL. She denies diabetes or medication use. How should her hypoglycemia be evaluated?

## Teaching Objectives
- Recognize Whipple’s triad and define hypoglycemia thresholds prompting evaluation.
- Outline the diagnostic workup for recurrent hypoglycemia in non-diabetic patients.

## Teaching Points
1. Definition and triad: Hypoglycemia in adults is defined as plasma glucose <55 mg/dL. Evaluation is triggered when Whipple’s triad is present: symptoms of hypoglycemia, a low plasma glucose, and resolution of symptoms with glucose administration. [Ref 1]
2. Initial workup: Obtain critical sample labs during a spontaneous or provoked episode: serum glucose, insulin, C-peptide, proinsulin, beta-hydroxybutyrate, cortisol, liver function tests, renal function, and sulfonylurea screen. Elevated insulin and C-peptide with a negative sulfonylurea screen suggest endogenous hyperinsulinemia (e.g., insulinoma). [Ref 1]
3. Provocative testing: If episodes are intermittent, a supervised 72-hour fast is the gold standard for diagnosing endogenous hyperinsulinism; [Ref 1] periodic blood draws during the fast assess insulin, C-peptide and proinsulin. Alternative tests include mixed-meal tolerance for postprandial hypoglycemia.
4. Imaging and further evaluation: Once biochemical evidence of endogenous hyperinsulinism is obtained, imaging (endoscopic ultrasound, MRI, CT) localizes pancreatic tumors. [Ref 1] Consider cortisol, growth hormone or IGF-II-secreting tumors in non-insulin-mediated hypoglycemia.

## Key Numbers
- Hypoglycemia threshold: venous glucose <55 mg/dL triggers evaluation. [Ref 1]
- 72-hour fast: confirm insulinoma by demonstrating inappropriately elevated insulin and C-peptide during hypoglycemia. [Ref 1]
- Elevated insulin and C-peptide with a negative sulfonylurea screen indicates endogenous hyperinsulinism. [Ref 1]

## Teaching Pearl
Medications are a common cause of hypoglycemia. Always review the patient’s medication list and screen serum/urine for sulfonylureas and insulin analogs before embarking on extensive tumor workup.

## Boards + Bedside Tie-In
Boards may present Whipple’s triad and ask which lab to order. At the bedside, ensure symptoms and glucose are documented simultaneously. Draw a critical sample before giving glucose; failure to obtain labs during an episode is a common diagnostic delay.

## References
1. Cryer PE, Axelrod L, Grossman AB, et al. Evaluation and management of adult hypoglycemic disorders: an Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2009;94(3):709-728. doi:10.1210/jc.2008-1410 PMID: 19088155.

---

# Inpatient Insulin Transitions: IV to Subcutaneous

## Clinical Setup
A 60-year-old man with type 1 diabetes is admitted for DKA and treated with an insulin infusion. His anion gap has closed and glucose is 160 mg/dL. How should he be transitioned safely from intravenous to subcutaneous insulin?

## Teaching Objectives
- Describe principles of transitioning from IV insulin infusion to subcutaneous insulin.
- Calculate subcutaneous dosing and overlap time to prevent recurrence of DKA or hyperglycemia.

## Teaching Points
1. Overlap: Guidelines recommend continuing intravenous insulin for 2-4 hours after administering the first subcutaneous dose [Ref 1, 4] to maintain adequate insulin levels and prevent relapse. Never stop the infusion immediately after the subcutaneous injection. [Ref 1]
2. Dose calculation: Estimate the patient’s total daily insulin requirement based on insulin infusion rates over the preceding 6-8 hours. Give approximately 80 % of this total as subcutaneous insulin for the first 24 hours; divide half as basal (e.g., glargine) and half as prandial insulin with meals. [Ref 2]
3. Type of insulin: Use long-acting basal analogs such as glargine or detemir for basal coverage. [Ref 3] Rapid-acting analogs (lispro, aspart) or regular insulin should cover meals and correction doses.
4. Monitoring: Check capillary glucose every 2-4 hours after transition and adjust prandial doses daily. If the patient is not eating, basal plus correctional insulin may suffice. [Ref 3]

## Key Numbers
- Overlap of IV and subcutaneous insulin: at least 2 hours (preferably 2-4 hours). [Ref 1]
- Initial subcutaneous dose: 80 % of total daily insulin requirement based on infusion; half as basal and half divided before meals. [Ref 2]
- Reduce infusion rate when blood glucose falls to 200-250 mg/dL and add dextrose while continuing insulin until transition. [Ref 3]

## Common Pitfall
Stopping IV insulin when the anion gap closes without providing basal insulin leads to recurrence of ketosis and hyperglycemia. Ensure appropriate overlap and dosing to prevent rebound DKA. [Ref 1]

## Boards + Bedside Tie-In
On exams, expect questions calculating subcutaneous doses from IV insulin requirements. At the bedside, review the infusion chart to estimate total daily insulin usage. Confirm the patient’s nutritional status and choose basal/bolus or basal plus correction regimen accordingly.

## References
1. Jun S, Hong J, McCoy J, et al. Improving intravenous and subcutaneous insulin overlap during treatment of diabetic ketoacidosis. *BMJ Open Qual*. 2024;13(1):e002226. doi:10.1136/bmjoq-2023-002226.
2. Vigersky RA. IV to subcutaneous insulin: tips for transition. *MDedge Endocrinology*; 2018.
3. Lizzo JM, Beyer A, Umpierrez GE. Adult diabetic ketoacidosis. In: *StatPearls* [Internet]. Treasure Island, FL: StatPearls Publishing; 2025.
4. Korytkowski MT, Muniyappa R, Antinori-Lent K, et al. Management of hyperglycemia in hospitalized adult patients in non-critical care settings: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2022;107(8):2101-2128. doi:10.1210/clinem/dgac278 PMID: 35690958.

---

# Steroid-Induced Hyperglycemia Management

## Clinical Setup
A 55-year-old woman with rheumatoid arthritis is started on prednisone 40 mg daily for a flare. Two days later her capillary glucose readings are 220-260 mg/dL despite no history of diabetes. What strategies can prevent and manage steroid-induced hyperglycemia in hospitalized patients?

## Teaching Objectives
- Recognize when to initiate insulin for glucocorticoid-induced hyperglycemia.
- Implement titration strategies for basal and prandial insulin during and after steroid therapy.

## Teaching Points
1. Recognition: Glucocorticoids increase hepatic gluconeogenesis and cause peripheral insulin resistance. [Ref 1] Hyperglycemia typically occurs 4-8 hours after steroid administration and often peaks in the afternoon or evening. [Ref 1] Monitoring should begin at initiation of therapy.
2. Initiation and dosing: Initiate insulin if a single capillary glucose exceeds 15 mmol/L (≈270 mg/dL) or two readings exceed 12 mmol/L (≈216 mg/dL). Use basal (isophane or glargine) insulin 0.4 U/kg with steroid administration and add rapid-acting insulin 0.1 U/kg at meals. For patients with pre-existing diabetes, increase total daily insulin dose by 10-30 % when steroids begin. [Ref 2]
3. Titration: Adjust insulin doses every 24-48 hours: increase total daily dose by 10-30 % if hyperglycemia persists or decrease by 10-30 % if hypoglycemia occurs. [Ref 2] When steroid doses are tapered, reduce insulin by 25-50 % to prevent hypoglycemia. [Ref 2]
4. Alternative agents: For mild hyperglycemia or outpatient management, consider adjusting oral diabetes medications. Nonetheless, insulin remains the safest and most flexible strategy in hospitalized patients. [Ref 3]

## Key Numbers
- Initiate insulin when one glucose exceeds 15 mmol/L (≈270 mg/dL) or two exceed 12 mmol/L (≈216 mg/dL). [Ref 1]
- Starting basal insulin: 0.4 U/kg at steroid administration plus 0.1 U/kg rapid-acting insulin with meals. [Ref 2]
- Titrate insulin by 10-30 % every 24-48 hours; reduce by 25-50 % when tapering steroids. [Ref 2]

## Teaching Pearl
Glucocorticoid-induced hyperglycemia often resolves quickly once steroids are discontinued. Plan ahead: reduce insulin dose as the steroid is tapered to avoid late-onset hypoglycemia.

## Boards + Bedside Tie-In
Exam questions may ask which insulin regimen to start for a patient on high-dose steroids. Clinically, monitor pre-meal and bedtime glucose, anticipate afternoon spikes, and involve endocrinology for complex cases.

## References
1. Korytkowski MT, Muniyappa R, Antinori-Lent K, et al. Management of hyperglycemia in hospitalized adult patients in non-critical care settings: an Endocrine Society clinical practice guideline. *J Clin Endocrinol Metab*. 2022;107(8):2101-2128. doi:10.1210/clinem/dgac278 PMID: 35690958.
2. Scholes G, Ng E, Bach LA, Sztal-Mazer S. Mixed insulin can improve control of prednisolone-induced hyperglycaemia. *Intern Med J*. 2023;53(12):2264-2269. doi:10.1111/imj.16050 PMID: 36880383.
3. Queensland Clinical Guidelines. Adult inpatient management of steroid-induced hyperglycaemia. Queensland Health; 2022.

---

# Thyroid Storm: Recognition and Initial Management

## Clinical Setup
A 30-year-old woman with known Graves disease presents with fever, agitation, tachycardia (heart rate 150 bpm) and vomiting after discontinuing antithyroid medications. Laboratory testing shows suppressed TSH and markedly elevated free T4. How do you recognize and treat thyroid storm?

## Teaching Objectives
- Identify clinical features distinguishing thyroid storm from uncomplicated thyrotoxicosis.
- Describe a multi-modal management strategy for thyroid storm.

## Teaching Points
1. Recognition: Thyroid storm is a life-threatening exacerbation of thyrotoxicosis characterized by hyperthermia, tachyarrhythmias, CNS agitation or delirium, vomiting and multi-organ dysfunction. [Ref 1] Common precipitants include infection, surgery, trauma and medication non-adherence. [Ref 2]
2. Antithyroid drugs: Begin propylthiouracil (PTU) 600-1 000 mg loading dose followed by 200-250 mg every 4 hours (total 1 200-1 500 mg/day), or methimazole 40 mg loading followed by 25 mg every 4 hours (total 120 mg/day). PTU additionally inhibits peripheral conversion of T4 to T3 [Ref 1].
3. Iodine therapy: Give iodine (Lugol’s solution 8-10 drops every 6-8 hours or saturated potassium iodide 5 drops every 6 hours) at least one hour after antithyroid drugs to block hormone release. [Ref 2]
4. Beta-adrenergic blockade: Administer propranolol 20-120 mg orally every 6 hours or 1-2 mg IV (repeat every 10-15 minutes as needed) to control tachycardia; alternatively, esmolol 500 μg/kg bolus followed by 50-200 μg/kg/min continuous infusion. [Ref 1, 2]
5. Glucocorticoids and supportive care: Give hydrocortisone 100 mg IV followed by 100 mg every 8 hours or dexamethasone 2 mg IV every 6 hours to reduce peripheral T4→T3 conversion and treat relative adrenal insufficiency. [Ref 2] Provide aggressive cooling, IV fluids, and treat precipitating causes. [Ref 1]

## Key Numbers
- PTU: 600-1 000 mg loading then 200-250 mg every 4 hours (1 200-1 500 mg/day). [Ref 2]
- Methimazole: 40 mg loading then 25 mg every 4 hours (total 120 mg/day). [Ref 2]
- Hydrocortisone: 100 mg IV then 100 mg every 8 hours or dexamethasone 2 mg IV every 6 hours. [Ref 2]

## Common Pitfall
Administering iodine before antithyroid drugs can increase hormone synthesis through the Jod-Basedow phenomenon. Always give PTU or methimazole first and wait at least one hour before iodine.

## Boards + Bedside Tie-In
Boards may ask about the sequence of therapies: beta-blocker, antithyroid drug, iodine, glucocorticoids and supportive care. Clinically, early recognition and rapid initiation of these therapies are critical; monitor for arrhythmias and treat underlying precipitants.

## References
1. Idrose AM. Acute and emergency care for thyrotoxicosis and thyroid storm. *Acute Med Surg*. 2015;2(3):147-157. doi:10.1002/ams2.104 PMID: 29123713.
2. Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. *Thyroid*. 2016;26(10):1343-1421. doi:10.1089/thy.2016.0220 PMID: 27521067.

---

# Myxedema Coma: Recognition and Initial Management

## Clinical Setup
An 82-year-old woman with long-standing hypothyroidism presents with confusion, hypothermia (core temperature 34 °C), bradycardia and hypotension after a winter storm caused her to miss medications. She is obtunded with dry, coarse skin. How should myxedema coma be recognized and managed?

## Teaching Objectives
- Recognize clinical features of myxedema coma and necessary diagnostic studies.
- Initiate appropriate thyroid hormone and adrenal support while providing supportive care.

## Teaching Points
1. Recognition: Myxedema coma is severe decompensated hypothyroidism presenting with altered mental status, hypothermia, bradycardia, hypotension, hypoventilation and hyponatremia. [Ref 1] It often occurs in elderly patients with long-standing hypothyroidism precipitated by infection, cold exposure or medication non-adherence. [Ref 1]
2. Initial evaluation: Obtain serum TSH, free T4, free T3 and random cortisol before treatment. [Ref 2] Hypoglycemia and hyponatremia should be corrected immediately; respiratory failure is common. [Ref 1]
3. Hormone replacement: Give IV levothyroxine loading dose 200-400 μg followed by maintenance 1.6 μg/kg/day (reduce to 75 % of the calculated oral dose because IV administration bypasses absorption). Consider liothyronine 5-20 μg IV loading then 2.5-10 μg every 8 hours if there is no response within 24 hours. [Ref 2]
4. Adrenal support: Administer hydrocortisone 100 mg IV immediately followed by 200-400 mg per day until adrenal insufficiency is excluded. [Ref 2]
5. Supportive care: Passive rewarming, mechanical ventilation if needed, and treatment of precipitating factors (infection, myocardial infarction) are critical. [Ref 1] Avoid rapid active rewarming which may precipitate vasodilation and shock. [Ref 1]

## Key Numbers
- Levothyroxine loading: 200-400 μg IV; maintenance 1.6 μg/kg/day at 75 % of calculated oral dose. [Ref 2]
- Hydrocortisone: 100 mg IV bolus then 200-400 mg/day until adrenal insufficiency is excluded. [Ref 2]
- Mortality of myxedema coma: 20-60 %, underscoring the need for prompt treatment. [Ref 1]

## Common Pitfall
Failure to provide empiric hydrocortisone may result in unrecognized adrenal insufficiency and hemodynamic collapse. Always administer stress-dose corticosteroids before thyroid hormone in suspected myxedema coma.

## Boards + Bedside Tie-In
Boards may test the order of therapy. At the bedside, treat empirically without waiting for laboratory results, monitor for arrhythmias and respiratory failure, and lower thyroid hormone doses in elderly or cardiac patients to reduce risk of myocardial ischemia.

## References
1. Zhang Y, Chu L, Han H. Myxedema coma: challenges and future directions, a systematic survey and review. *Thyroid Res*. 2025;18(1):48. doi:10.1186/s13044-025-00268-1 PMID: 41053871.
2. Jonklaas J, Bianco AC, Bauer AJ, et al. Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force on thyroid hormone replacement. *Thyroid*. 2014;24(12):1670-1751. doi:10.1089/thy.2014.0028 PMID: 25266247.

---

# Adrenal Insufficiency: Recognition and Stress Dosing

## Clinical Setup
A 35-year-old woman with known Addison disease develops vomiting and abdominal pain after a gastrointestinal illness. She is hypotensive with systolic blood pressure 85 mmHg, hyponatremic and hyperkalemic. What constitutes an adrenal crisis, and how should stress dosing be managed?

## Teaching Objectives
- Recognize clinical features of adrenal crisis and precipitating factors.
- Implement acute treatment and stress-dose corticosteroid regimens.

## Teaching Points
1. Recognition: Adrenal crisis presents with hypotension refractory to fluids, hypovolemia, abdominal pain, vomiting, fever, hyponatremia and hyperkalemia. [Ref 1] Precipitating factors include infection, trauma, surgery or abrupt withdrawal of corticosteroid therapy. [Ref 2]
2. Acute treatment: Immediately administer hydrocortisone 100 mg IV or IM bolus followed by 200 mg over 24 hours via continuous infusion or 50 mg IV/IM every 6 hours. Rapidly infuse 1 L of isotonic saline within the first hour and provide 4-6 L over 24 hours to restore volume and correct hypotension. [Ref 2]
3. Stress dosing: For mild stress (febrile illness), patients should double their usual oral glucocorticoid dose. For major stress (surgery, trauma), they should receive 100 mg hydrocortisone IM/IV followed by continuous 200 mg/day infusion and resume oral dosing when stable. [Ref 2]
4. Tapering: After 24-72 hours, taper hydrocortisone to maintenance dosing and introduce mineralocorticoid (fludrocortisone) once the hydrocortisone dose falls below 50 mg/day. [Ref 2]

## Key Numbers
- Hydrocortisone bolus: 100 mg IV/IM; maintenance: 200 mg/24 h (continuous or 50 mg every 6 hours). [Ref 2]
- Fluid resuscitation: 1 L isotonic saline in first hour; 4-6 L over 24 hours. [Ref 1]
- For minor illness, double usual oral glucocorticoid dose; for major stress, 100 mg hydrocortisone plus 200 mg/day infusion. [Ref 1, 2]

## Common Pitfall
Delaying steroid administration while awaiting confirmatory tests can be fatal. In suspected adrenal crisis, treat empirically with hydrocortisone and fluids immediately.

## Boards + Bedside Tie-In
Board questions emphasize acute management and stress dosing. Clinically, instruct patients with chronic adrenal insufficiency to carry emergency hydrocortisone and educate them on sick-day rules.

## References
1. Dineen R, Thompson CJ, Sherlock M. Adrenal crisis: prevention and management in adult patients. *Ther Adv Endocrinol Metab*. 2019;10:2042018819848218. doi:10.1177/2042018819848218 PMID: 31223468.
2. Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and treatment of primary adrenal insufficiency: an Endocrine Society clinical practice guideline. *J Clin Endocrinol Metab*. 2016;101(2):364-389. doi:10.1210/jc.2015-1710 PMID: 26760044.

---

# Approach to the Incidental Thyroid Nodule

## Clinical Setup
A 45-year-old woman undergoes carotid Doppler ultrasound for transient ischemic attack and is incidentally found to have a 1.6-cm solid, hypoechoic thyroid nodule. Her thyroid function tests are normal. What is the recommended approach for evaluating such nodules?

## Teaching Objectives
- Outline the initial evaluation of incidental thyroid nodules, including laboratory and imaging steps.
- Apply size- and risk-based criteria for fine-needle aspiration (FNA).

## Teaching Points
1. Initial assessment: Measure serum TSH in all patients. [Ref 2] If TSH is low, obtain a radionuclide scan to assess for autonomous function. [Ref 2] Perform high-resolution ultrasound to evaluate nodule size, composition, echogenicity, shape and cervical lymph nodes. [Ref 1]
2. Ultrasound risk stratification: High-risk features (hypoechoic, irregular margins, microcalcifications, taller-than-wide shape) warrant a lower FNA threshold. [Ref 2] Low-risk features include spongiform or purely cystic nodules. [Ref 1]
3. FNA criteria: FNA is recommended for nodules ≥1 cm with intermediate/high suspicion, ≥1.5 cm with low suspicion and ≥2 cm with very low suspicion. [Ref 2] FNA is not generally indicated for purely cystic or sub-centimeter nodules unless there are high-risk history or suspicious lymph nodes. [Ref 2]
4. Follow-up: Nodules that do not meet FNA criteria should undergo periodic ultrasound surveillance (e.g., at 6-12 months initially). [Ref 2] Consider molecular testing or referral to endocrinology for indeterminate cytology. [Ref 1]

## Key Numbers
- FNA size thresholds: ≥1 cm (intermediate/high suspicion); ≥1.5 cm (low suspicion); ≥2 cm (very low suspicion). [Ref 2]
- Suppressed TSH warrants radionuclide scan; normal or elevated TSH indicates ultrasound and FNA triage. [Ref 2]
- High-risk ultrasound features: hypoechoic, irregular margins, microcalcifications, taller-than-wide shape. [Ref 2]

## Teaching Pearl
Risk stratification using ultrasound patterns helps avoid unnecessary biopsies. Purely cystic nodules and spongiform lesions have very low malignancy risk and can often be managed conservatively.

## Boards + Bedside Tie-In
Board questions may provide ultrasound descriptions and ask whether FNA is indicated. In practice, obtain high-quality ultrasound and apply size and risk criteria to determine FNA versus observation.

## References
1. Tamhane S, Gharib H. Thyroid nodule update on diagnosis and management. *Clin Diabetes Endocrinol*. 2016;2:17. doi:10.1186/s40842-016-0035-7 PMID: 28702251.
2. Haugen BR, Alexander EK, Bible KC, et al. 2015 American Thyroid Association management guidelines for adult patients with thyroid nodules and differentiated thyroid cancer. Thyroid. 2016;26(1):1-133. doi:10.1089/thy.2015.0020 PMID: 26462967.

---

# Pheochromocytoma: Recognition and Workup

## Clinical Setup
A 48-year-old man experiences episodic pounding headaches, profuse sweating and palpitations. Blood pressure measurements reveal paroxysmal hypertension up to 220/120 mmHg. His father underwent surgery for a catecholamine-secreting tumor. What is the appropriate diagnostic approach and preoperative management?

## Teaching Objectives
- Identify clinical features suggestive of pheochromocytoma or paraganglioma.
- Outline the biochemical evaluation, genetic considerations and preoperative preparation.

## Teaching Points
1. Clinical features: Persistent or paroxysmal hypertension occurs in 80-90 % of patients; the classic triad of headache, sweating and palpitations is present in approximately 25 %. [Ref 1] Symptoms may be episodic and triggered by stress, medications or position changes. Family history and syndromic features (MEN2, VHL) increase suspicion. [Ref 3]
2. Biochemical evaluation: Initial screening tests include plasma free metanephrines or 24-hour urinary fractionated metanephrines. [Ref 3] Repeat testing if high clinical suspicion persists despite negative results. Approximately 40 % of patients harbour germline mutations, so genetic counselling is recommended. [Ref 3]
3. Imaging: After biochemical confirmation, perform cross-sectional imaging (CT or MRI of abdomen/pelvis) or functional imaging (MIBG or PET) to localize tumors. [Ref 3]
4. Preoperative preparation: Start alpha-adrenergic blockade at least 14 days before surgery (phenoxybenzamine 10 mg once or twice daily, titrated to 20-100 mg/day; alternatively, doxazosin 1-2 mg daily titrated upward). [Ref 2] Encourage high-sodium diet and liberal fluid intake to counteract vasodilation. Only after adequate alpha blockade should beta-blockers be added to control tachycardia. [Ref 3] Target seated BP <130/80 mmHg with standing systolic BP >90 mmHg and heart rate 60-70 bpm seated and 70-80 bpm standing. [Ref 3]

## Key Numbers
- Hypertension present in 80-90 % of patients; classic triad in ~25 %. [Ref 1]
- Germline mutations occur in ≈40 % of cases. [Ref 3]
- Phenoxybenzamine starting dose 10 mg once or twice daily, titrated to 20-100 mg/day; initiate at least 14 days pre-operatively. [Ref 2, 3]

## Common Pitfall
Starting beta-blockers before achieving adequate alpha blockade can precipitate hypertensive crisis by unopposed alpha-adrenergic stimulation. Always initiate alpha blockade first and monitor volume status.

## Boards + Bedside Tie-In
Exams often emphasize biochemical testing (plasma free metanephrines) and preoperative alpha blockade. Clinically, counsel patients about medication adherence and fluid intake, and coordinate with genetics for familial syndromes.

## References
1. Aygün N, Uludağ M. Pheochromocytoma and paraganglioma: from clinical findings to diagnosis. *Sisli Etfal Hastan Tip Bul*. 2020;54(3):271-280. doi:10.14744/SEMB.2020.14826.
2. Ramachandran R, Rewari V. Current perioperative management of pheochromocytomas. *Indian J Urol*. 2017;33(1):19-25. doi:10.4103/0970-1591.194781.
3. Lenders JWM, Duh QY, Eisenhofer G, et al. Pheochromocytoma and paraganglioma: an Endocrine Society clinical practice guideline. *J Clin Endocrinol Metab*. 2014;99(6):1915-1942. doi:10.1210/jc.2014-1498 PMID: 24893135.

---

# Cellulitis vs Abscess: Management Differences

## Clinical Setup
A 37-year-old man presents with a 4-cm fluctuant, tender lesion on his thigh surrounded by erythema and induration. He is afebrile and otherwise healthy. What distinguishes management of cellulitis from that of a cutaneous abscess?

## Teaching Objectives
- Differentiate cellulitis and abscess clinically and determine when systemic antibiotics are indicated.
- Understand indications for incision and drainage and adjunctive antibiotic therapy.

## Teaching Points
1. Definitions: Cellulitis is a diffuse spreading infection of the skin and subcutaneous tissues, usually caused by β-hemolytic streptococci or *Staphylococcus aureus*. [Ref 1] Abscesses are collections of pus within dermis or deeper tissues that create a fluctuant mass. [Ref 1]
2. Management of cellulitis: Systemic antibiotics targeting streptococci (e.g., penicillin, cephalexin) and *S. aureus* (e.g., clindamycin, doxycycline, trimethoprim-sulfamethoxazole) are the mainstay. [Ref 1] Incision is not required unless purulence develops. [Ref 1]
3. Management of abscess: Incision and drainage with thorough evacuation and breaking up of loculations is the primary therapy. [Ref 1] Systemic antibiotics are usually unnecessary for small, uncomplicated abscesses in immunocompetent hosts; they may be considered if there are multiple lesions, extensive surrounding cellulitis, signs of systemic infection (temperature >38.5 °C or pulse >100 bpm), immunosuppression or inadequate drainage. [Ref 1, 2]
4. Follow-up: After drainage, instruct patients to keep the wound open with packing or wicks as needed and return if signs of recurrence develop. [Ref 2] Systemic antibiotics should be limited to 24-48 hours when indicated. [Ref 1]

## Key Numbers
- Systemic antibiotics are rarely required for uncomplicated cutaneous abscesses; consider them if temperature >38.5 °C or pulse >100 bpm or if multiple lesions or immunosuppression. [Ref 1]
- Incision and drainage is the definitive treatment for most abscesses. [Ref 1]
- Contamination from incision and drainage is uncommon; bacteremia is rare. [Ref 2]

## Common Pitfall
Using antibiotics alone for an abscess without performing incision and drainage leads to treatment failure. Adequate drainage is essential.

## Boards + Bedside Tie-In
Boards often describe a fluctuant lesion and ask for next step. At the bedside, differentiate cellulitis from abscess by palpating for fluctuance. Reserve antibiotics for cellulitis or complicated abscesses.

## References
1. Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. *Clin Infect Dis*. 2014;59(2):e10-e52. doi:10.1093/cid/ciu444 PMID: 24973422.
2. Tang W, Wan Y, Sindhura S. Guidelines vs actual management of skin and soft tissue infections in the emergency department. *J Emerg Med*. 2020;58(6):938-945. doi:10.1016/j.jemermed.2020.02.017.

---

# Osteomyelitis: Diagnosis and Treatment Principles

## Clinical Setup
A 70-year-old man with diabetes presents with worsening low back pain and fever. He has a history of *Staphylococcus aureus* bacteremia two weeks earlier. MRI of the spine shows vertebral body marrow signal consistent with infection. How should vertebral osteomyelitis be diagnosed and treated?

## Teaching Objectives
- Describe diagnostic steps for suspected native vertebral osteomyelitis.
- Outline duration and mode of antimicrobial therapy.

## Teaching Points
1. Diagnosis: Native vertebral osteomyelitis often results from hematogenous seeding. [Ref 1] Plain radiographs are insensitive; MRI is the imaging modality of choice for early detection and to assess epidural extension. [Ref 1] Obtain blood cultures and, whenever feasible, percutaneous biopsy for microbiologic diagnosis before initiating antibiotics. [Ref 1]
2. Empiric antibiotics: Empiric antimicrobial therapy should generally be withheld until microbiologic diagnosis, except in patients with sepsis or neurologic compromise. [Ref 1] If empiric therapy is necessary, cover *S. aureus* (including MRSA), gram-negative bacilli and streptococci. [Ref 1]
3. Treatment duration: Most patients are cured with a 6-week course of pathogen-directed antimicrobial therapy. [Ref 1] Randomized studies suggest that 6 weeks is non-inferior to 12 weeks, though longer courses may be needed for complicated infections or inadequate source control. [Ref 2]
4. Route of therapy: Intravenous therapy is used initially; early switch to oral therapy with highly bioavailable agents (e.g., fluoroquinolones plus rifampin) may be safe and effective. [Ref 2] Monitor inflammatory markers and clinical response to guide duration. [Ref 1]
5. Surgical indications: Consider surgical intervention for neurologic compromise, spinal instability, large abscesses or failure of medical therapy. [Ref 1]

## Key Numbers
- MRI sensitivity and specificity for vertebral osteomyelitis exceed 90 %, making it the imaging test of choice. [Ref 1]
- Recommended antimicrobial therapy duration: 6 weeks; non-inferior to 12 weeks in randomized studies. [Ref 1, 2]
- Withhold empiric antibiotics until cultures obtained unless sepsis or neurologic deficits are present. [Ref 1]

## Common Pitfall
Starting broad-spectrum antibiotics before obtaining blood cultures or biopsy may sterilize cultures and hinder diagnosis. Obtain samples first whenever possible.

## Boards + Bedside Tie-In
Exams may test when to withhold antibiotics and appropriate treatment duration. Clinically, coordinate with radiology and interventional radiology for biopsy, monitor CRP/ESR trends and arrange for outpatient parenteral or oral therapy.

## References
1. Berbari EF, Kanj SS, Kowalski TJ, et al. 2015 Infectious Diseases Society of America clinical practice guidelines for the diagnosis and treatment of native vertebral osteomyelitis in adults. *Clin Infect Dis*. 2015;61(6):e26-e46. doi:10.1093/cid/civ482 PMID: 26229122.
2. Spellberg B, Lipsky BA. Systemic antibiotic therapy for chronic osteomyelitis in adults. *Clin Infect Dis*. 2012;54(3):393-407. doi:10.1093/cid/cir842 PMID: 22157324.

---

# Infective Endocarditis: Diagnosis and Initial Management

## Clinical Setup
A 64-year-old man with a prosthetic aortic valve presents with fever and a new murmur. You suspect infective endocarditis. How should you proceed with diagnostic evaluation and empiric therapy?

## Teaching Objectives
- Outline appropriate blood culture collection and early diagnostic steps for suspected infective endocarditis.
- Summarize principles of initial antimicrobial therapy for native and prosthetic valve endocarditis.

## Teaching Points
1. Blood cultures: Obtain at least three sets of blood cultures, 10 mL each, from separate venipuncture sites at 30-minute intervals before starting antibiotics. [Ref 1, 2] Each set should include one aerobic and one anaerobic bottle. Repeat cultures 48-72 hours after starting therapy to monitor sterilization. [Ref 2]
2. Diagnostic imaging: Perform transthoracic echocardiography (TTE) initially; transesophageal echocardiography (TEE) is more sensitive, particularly in prosthetic valves. [Ref 1] Modified Duke criteria aid diagnosis. [Ref 1, 2]
3. Empiric therapy: Early empiric therapy should target staphylococci, streptococci and enterococci. [Ref 2] For native valve endocarditis without prosthetic material, combination therapy with IV oxacillin (or vancomycin if MRSA or penicillin allergy) plus ceftriaxone or gentamicin may be used; avoid routine aminoglycosides for staphylococcal infections due to nephrotoxicity. [Ref 2] For prosthetic valve endocarditis, add rifampin after 3-5 days of effective therapy. [Ref 1]
4. Duration: Prolonged therapy is required; native valve endocarditis typically requires 4-6 weeks of bactericidal antibiotics from the first negative culture, and prosthetic valve endocarditis generally requires at least 6 weeks. [Ref 1, 2]
5. Additional considerations: Consult cardiology and infectious disease specialists early. Valve surgery may be necessary for heart failure, uncontrolled infection or prevention of embolism. [Ref 1]

## Key Numbers
- Draw at least three sets of blood cultures 30 minutes apart before antibiotics. [Ref 1, 2]
- Repeat cultures after 48-72 hours to ensure clearance. [Ref 2]
- Duration of therapy: 4-6 weeks for native valves; ≥6 weeks for prosthetic valves. [Ref 1, 2]

## Common Pitfall
Starting antibiotics before obtaining adequate blood cultures compromises diagnosis and may lead to culture-negative endocarditis. Always obtain cultures first.

## Boards + Bedside Tie-In
Exams emphasize the number and timing of blood cultures and appropriate empiric therapy. At the bedside, quickly obtain cultures, involve infectious disease consultants and tailor therapy once organism and susceptibilities are known.

## References
1. Habib G, Lancellotti P, Antunes MJ, et al. 2015 ESC guidelines for the management of infective endocarditis. *Eur Heart J*. 2015;36(44):3075-3128. doi:10.1093/eurheartj/ehv319 PMID: 26320109.
2. Baddour LM, Wilson WR, Bayer AS, et al. Infective endocarditis in adults: diagnosis, antimicrobial therapy and management of complications: a scientific statement for healthcare professionals from the American Heart Association. *Circulation*. 2015;132(15):1435-1486. doi:10.1161/CIR.0000000000000296 PMID: 26373316.

---

# Healthcare-Associated Pneumonia Considerations

## Clinical Setup
A 72-year-old man develops fever and purulent sputum on hospital day 5 after admission for hip fracture. He was receiving intravenous cefazolin for surgical prophylaxis. Chest radiograph shows a new infiltrate. How should healthcare-associated pneumonia (HAP) and ventilator-associated pneumonia (VAP) be approached?

## Teaching Objectives
- Define HAP and VAP and identify risk factors for multidrug-resistant (MDR) pathogens.
- Select empiric antibiotic regimens based on risk stratification and local resistance patterns.

## Teaching Points
1. Definitions: HAP is pneumonia occurring ≥48 hours after hospital admission, and VAP occurs ≥48 hours after endotracheal intubation. [Ref 1] The old category of health-care-associated pneumonia (HCAP) has been abandoned; management should focus on risk factors for MDR organisms and local antibiograms. [Ref 1]
2. Risk factors for MDR pathogens: Prior IV antibiotic use within 90 days, septic shock at onset, acute respiratory distress syndrome preceding VAP, hospitalization >5 days before pneumonia onset, and acute renal replacement therapy. [Ref 1] These factors increase the likelihood of MRSA and resistant gram-negative organisms. [Ref 1]
3. Empiric therapy (no MDR risk): For patients without MDR risk factors, choose a single anti-pseudomonal agent that also covers other gram-negative bacteria and *Staphylococcus aureus*, such as piperacillin-tazobactam, cefepime, levofloxacin, imipenem or meropenem. [Ref 1] MRSA coverage (vancomycin or linezolid) should be added only if local MRSA prevalence exceeds 10-20 % or risk factors are present. [Ref 1]
4. Empiric therapy (MDR risk): If MDR risk factors are present or local resistance to first agents exceeds 10 %, use dual anti-pseudomonal therapy from different classes (e.g., β-lactam plus fluoroquinolone or aminoglycoside) and add MRSA coverage. [Ref 1]
5. Duration and de-escalation: Treat for 7 days in most cases and de-escalate based on culture results and clinical response. [Ref 1] Shorter courses reduce adverse effects and resistance. [Ref 2]

## Key Numbers
- HAP/VAP develops ≥48 hours after hospitalization or intubation. [Ref 1]
- MDR risk factors include prior IV antibiotics within 90 days, septic shock, ARDS, hospitalization >5 days before pneumonia and renal replacement therapy. [Ref 1]
- Recommended treatment duration: 7 days. [Ref 1]

## Common Pitfall
Unnecessary broad-spectrum coverage in patients without MDR risk factors promotes antibiotic resistance. Tailor therapy to risk factors and local antibiogram.

## Boards + Bedside Tie-In
Board questions test identification of risk factors and appropriate empiric regimens. At the bedside, use local resistance data, collect sputum cultures before antibiotics and reassess therapy daily to de-escalate when possible.

## References
1. Kalil AC, Metersky ML, Klompas M, et al. Management of adults with hospital-acquired and ventilator-associated pneumonia: 2016 clinical practice guidelines by the Infectious Diseases Society of America and the American Thoracic Society. Clin Infect Dis. 2016;63(5):e61-e111. doi:10.1093/cid/ciw353 PMID: 27418577.
2. Mills GD, Bertuzzi S, Trammell GL. Practical considerations in the management of healthcare-associated pneumonia. *P & T*. 2017;42(10):648-654.

---

# Approach to Positive Blood Cultures

## Clinical Setup
A 58-year-old man is admitted for cellulitis. Blood cultures drawn on admission grow coagulase-negative staphylococci in one of four bottles after 72 hours. How should positive blood cultures be interpreted and managed?

## Teaching Objectives
- Distinguish contaminated blood cultures from true bloodstream infections.
- Identify organisms that always warrant treatment and necessary evaluation.

## Teaching Points
1. Contamination versus infection: Contamination rates in blood cultures should be <3 %. [Ref 3] Growth of skin commensals (e.g., coagulase-negative staphylococci, *Bacillus* species, *Cutibacterium acnes*) in a single bottle collected after 48-72 hours often represents contamination. [Ref 1] True infection is more likely when the same organism grows in multiple bottles, with shorter time to positivity and concordant clinical signs. [Ref 1]
2. Organisms always significant: Positive cultures for *Staphylococcus aureus*, group A streptococci, *Streptococcus pneumoniae*, *Pseudomonas aeruginosa*, Enterobacteriaceae, *Bacteroides* species, *Haemophilus influenzae* and *Candida* species should be considered true bloodstream infections and treated accordingly. [Ref 1] For *S. aureus* bacteremia or candidemia, obtain echocardiography (preferably transesophageal) and ophthalmologic exam for candidemia due to risk of endocarditis and endophthalmitis. [Ref 2]
3. Evaluation strategy: Consider number of positive bottles, organism type, time to positivity, patient’s clinical status and presence of intravascular devices. Repeat blood cultures to confirm clearance; contamination typically does not persist. [Ref 1]
4. Management: If contamination is likely, communicate with the laboratory to review collection technique and avoid unnecessary antibiotics. [Ref 3] If true infection is suspected, start appropriate empiric therapy and evaluate for source control. [Ref 2]

## Key Numbers
- Target contamination rate for blood cultures: <3 %. [Ref 3]
- Repeat positive cultures after 72 hours suggest true infection; single bottle growth of skin commensals often indicates contamination. [Ref 1]
- Organisms such as *Staphylococcus aureus*, group A streptococci and *Candida* should always prompt evaluation and treatment. [Ref 1, 2]

## Teaching Pearl
When in doubt, assess the clinical context: fever, leukocytosis, hemodynamic instability and presence of indwelling catheters increase the likelihood of true bacteremia. Do not ignore positive cultures for *S. aureus* or *Candida* regardless of the number of bottles.

## Boards + Bedside Tie-In
Boards may provide culture results and ask if antibiotics are needed. At the bedside, interpret cultures with clinical judgement; avoid overtreatment of contaminants but never under-treat true infections.

## References
1. Chela HK, Vasudevan A, Rojas-Moreno C, Naqvi SH. Approach to positive blood cultures in the hospitalized patient: a review. Mo Med. 2019;116(4):313-317. PMID: 31527981.
2. Mermel LA, Allon M, Bouza E, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: 2009 update by the Infectious Diseases Society of America. *Clin Infect Dis*. 2009;49(1):1-45. doi:10.1086/599376 PMID: 19489710.
3. Snyder SR, Favoreto AM, Matthew L. Continuous quality improvement: reducing blood culture contamination rates using evidence-based practice. *Clin Lab Sci*. 2012;25(4):200-204.`;

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
const WEEK_5_MARKDOWN = `# Managing Severe Hyperkalemia

## Clinical Setup
A 68-year-old man with chronic kidney disease stage IV on lisinopril and spironolactone presents to the emergency department with a serum potassium of 7.2 mEq/L. He is asymptomatic but his electrocardiogram demonstrates peaked T-waves without QRS prolongation. What is the appropriate management strategy?

## Teaching Objectives
- Recognize when hyperkalemia requires emergent therapy
- Implement the three-step approach to stabilize, shift, and remove potassium

## Teaching Points
1. Severe hyperkalemia (K⁺ >6.0 mEq/L or any ECG change) requires immediate treatment. Management occurs in three steps: stabilize the cardiac membrane with intravenous calcium, shift potassium intracellularly, and remove total body potassium through excretion or dialysis [Ref 1].
2. To stabilize the membrane, administer calcium gluconate 1-2 g IV over 2-3 minutes. Effects begin in 1-3 minutes and last 30-60 minutes; repeat doses may be needed if ECG abnormalities persist. Calcium lowers arrhythmia risk but does not reduce serum potassium [Ref 1].
3. Insulin and dextrose shift potassium into cells. Give 10 units of regular insulin IV with 25 g of dextrose; expect a 0.5-1.2 mEq/L decrease in 15-30 minutes. Monitor glucose closely to avoid hypoglycemia [Ref 1]. Nebulized albuterol 10-20 mg offers an additive 0.5-1.0 mEq/L reduction but may cause tachycardia [Ref 1].
4. Definitive removal requires enhancing renal excretion or extracorporeal removal. Loop diuretics increase urinary potassium loss if kidney function allows. Newer potassium binders (patiromer, sodium zirconium cyclosilicate) are safer than older resin agents but act slowly; dialysis is required for end-stage kidney disease or refractory hyperkalemia [Ref 1, Ref 2].
5. In crush syndrome or rhabdomyolysis, aggressive isotonic fluid resuscitation (goal urine output 200-300 mL/h) helps prevent acute kidney injury and attenuates hyperkalemia. Frequent serum potassium monitoring every 4 hours guides ongoing therapy [Ref 2].

## Key Numbers
- Potassium >6.0 mEq/L or any ECG change: threshold for emergent therapy; K⁺ >6.5 mEq/L with ECG changes constitutes a medical emergency warranting immediate calcium administration [Ref 1].
- Regular insulin 10 units IV plus 25 g dextrose reduces serum potassium by roughly 0.5-1.2 mEq/L within 15-30 minutes; hypoglycemia occurs in up to 75 % of patients if dextrose is omitted [Ref 1].
- Urine output target 200-300 mL/h in crush-related hyperkalemia: achieved by high-volume isotonic fluids to mitigate myoglobin-induced renal tubular injury [Ref 2].

## Common Pitfall
Relying on sodium polystyrene sulfonate (Kayexalate) for acute hyperkalemia is problematic. It has an unpredictable onset of action (hours to days) and risk of intestinal necrosis; it should not be used for emergent management. Newer binders have improved safety profiles but are still too slow for acute emergencies [Ref 1].

## Boards + Bedside Tie-In
Examination questions often test recognition of ECG changes and which therapies stabilize membranes versus lower serum potassium. At the bedside, apply the same sequence: administer calcium to buy time, then layer insulin/dextrose and beta-agonists, and arrange for definitive removal via diuretics or dialysis while monitoring for hypoglycemia and rebound hyperkalemia.

## References
1. Lindner G, Burdmann EA, Clase CM, et al. Acute hyperkalemia in the emergency department: a summary from a Kidney Disease: Improving Global Outcomes conference. Eur J Emerg Med. 2020;27(5):329-337. doi:10.1097/MEJ.0000000000000691 PMID: 32852924
2. Abu-Zidan FM, Jawas A, Saleh M, et al. Surgical and critical care management of earthquake musculoskeletal injuries and crush syndrome. Turk J Emerg Med. 2024;24(1):44-55. doi:10.1016/j.tjem.2023.08.002 PMID: 38766416

# Sepsis: Recognition and the First Three Hours

## Clinical Setup
A 75-year-old man with diabetes and chronic obstructive pulmonary disease presents with fever, confusion, tachypnea, hypotension (blood pressure 86/50 mm Hg) and lactate of 4.2 mmol/L. Blood cultures are pending. What interventions should be prioritized during the first three hours?

## Teaching Objectives
- Identify sepsis and initiate early goal-directed resuscitation
- Balance fluid resuscitation with avoidance of fluid overload

## Teaching Points
1. Sepsis is defined as life-threatening organ dysfunction caused by a dysregulated host response to infection. Initial evaluation includes measurement of blood pressure, mental status and lactate. Hypotension or elevated lactate signals sepsis-induced hypoperfusion and necessitates prompt intervention [Ref 1].
2. Early broad-spectrum antibiotics improve survival. Administer empiric therapy as soon as possible after obtaining cultures; do not delay antibiotics beyond the time needed for culture collection [Ref 1].
3. Fluid resuscitation is the cornerstone of early management. Current guidelines recommend 30 mL/kg of isotonic crystalloid for hypotension or lactate ≥4 mmol/L. However, observational data indicate that cumulative positive fluid balance is associated with increased mortality; therefore, reassess volume status frequently and individualize further fluid administration [Ref 1, Ref 2].
4. After the initial bolus, assess hemodynamic response. Target a mean arterial pressure (MAP) of at least 65 mm Hg. If hypotension persists despite adequate fluids, initiate vasopressors (norepinephrine is first-line) and consider invasive hemodynamic monitoring. Avoid excess fluids in patients with cardiogenic or renal limitations [Ref 1, Ref 2].
5. Concurrent tasks include obtaining blood cultures before antibiotics when feasible, identifying the source of infection (e.g., imaging, bedside examination) and controlling it (e.g., drainage or removal of infected devices). Early source control is as important as resuscitation.

## Key Numbers
- 30 mL/kg isotonic crystalloid: recommended initial bolus for sepsis-induced hypoperfusion; for an 80 kg patient this equates to 2.4 liters [Ref 1].
- MAP ≥65 mm Hg: target after fluid resuscitation; persistent MAP <65 despite fluids necessitates vasopressors [Ref 1].
- Positive fluid balance: observational studies show that each liter of positive balance beyond the initial resuscitation is associated with increased mortality; judicious fluid management improves outcomes [Ref 2].

## Common Pitfall
Over-resuscitation with fluids without reassessment can lead to pulmonary edema, abdominal compartment syndrome or heart failure exacerbation. After the initial bolus, use dynamic indices (pulse pressure variation, passive leg raise) and bedside ultrasound to guide further fluids, and start vasopressors when appropriate [Ref 2].

## Boards + Bedside Tie-In
Board questions emphasize elements of the sepsis bundle (fluid resuscitation, antibiotics, lactate measurement) and MAP targets. Clinically, the challenge is balancing aggressive resuscitation with fluid overload risk. Maintaining a structured checklist-cultures, antibiotics, fluids, vasopressors-helps ensure timely interventions.

## References
1. Jozwiak M, Hamzaoui O, Georger J, et al. Fluid resuscitation during early sepsis: a need for individualization. Minerva Anestesiol. 2018;84(8):987-992. doi:10.23736/S0375-9393.18.12422-9 PMID: 29444562
2. Tigabu BM, Davari M, Gohari B, et al. Fluid volume, fluid balance and patient outcome in severe sepsis and septic shock. J Crit Care. 2018;48:153-159. doi:10.1016/j.jcrc.2018.08.018 PMID: 30199843

# Shock: Classification and Initial Approach

## Clinical Setup
A 63-year-old man presents with chest pain, diaphoresis and blood pressure 70/40 mm Hg. He is tachycardic and cool to the touch. The team must determine the type of shock and initiate appropriate therapy. How should he be evaluated and managed?

## Teaching Objectives
- Differentiate the major classes of shock and their pathophysiology
- Apply an algorithmic initial approach tailored to the underlying type

## Teaching Points
1. Shock is defined as inadequate tissue perfusion resulting in cellular dysfunction. It can be categorized into four major types: hypovolemic (volume loss), cardiogenic (pump failure), distributive (systemic vasodilation, e.g., sepsis or anaphylaxis) and obstructive (extracardiac impedance to flow, such as pulmonary embolism or cardiac tamponade). Classification guides targeted therapy [Ref 2].
2. Hypovolemic shock results from hemorrhage or fluid losses (vomiting, diarrhea, burns). Management focuses on rapid control of bleeding and replacement of intravascular volume with crystalloid and blood products; vasopressors are generally not first-line until volume is restored [Ref 2].
3. Cardiogenic shock arises from pump failure due to acute myocardial infarction, severe heart failure or arrhythmias. Hemodynamics show low cardiac output and high filling pressures. Initial management includes cautious fluid administration, vasopressors (norepinephrine) and inotropes (dobutamine) while arranging for definitive treatment such as reperfusion or mechanical circulatory support [Ref 1].
4. Distributive shock, typified by sepsis or anaphylaxis, features profound vasodilation and high cardiac output. Treatment involves aggressive fluid resuscitation, vasopressors to counteract vasodilation and addressing the underlying cause (antibiotics or epinephrine for anaphylaxis). Early recognition improves outcomes [Ref 2].
5. Obstructive shock is caused by mechanical obstruction to cardiac filling or output. Examples include tension pneumothorax, cardiac tamponade and massive pulmonary embolism. Therapy aims at relieving the obstruction-needle decompression for pneumothorax, pericardiocentesis for tamponade or thrombolytics/embolectomy for pulmonary embolism [Ref 2].

## Key Numbers
- Shock is generally defined by sustained systolic blood pressure <90 mm Hg or mean arterial pressure <65 mm Hg with signs of hypoperfusion (altered mental status, oliguria, cold extremities) [Ref 3].
- Cardiogenic shock has a mortality rate exceeding 40 % despite treatment; early revascularization in myocardial infarction reduces mortality and is a mainstay of management [Ref 1].
- Distributive shock often presents with warm extremities and widened pulse pressure early; persistently low systemic vascular resistance despite fluids may require vasopressor doses escalating beyond 0.1 μg/kg/min of norepinephrine [Ref 1].

## Teaching Pearl
Use bedside ultrasound to rapidly differentiate types of shock. A "venous tank" view evaluates volume status (inferior vena cava diameter and collapsibility), while cardiac views detect pericardial effusion, right ventricular dilation suggestive of pulmonary embolism or global systolic dysfunction. Incorporating point-of-care ultrasound expedites diagnosis and targeted therapy [Ref 1, Ref 2].

## Boards + Bedside Tie-In
On exams, classification of shock with associated hemodynamic profiles is frequently tested. At the bedside, rapid recognition prevents reflexive fluid administration in cardiogenic or obstructive shock where excess volume may worsen outcomes. A structured approach-identify type, address immediate life-threats and initiate definitive therapy-bridges theoretical knowledge and clinical practice.

## References
1. Sarma D, Jentzer JC. Cardiogenic Shock: Pathogenesis, Classification, and Management. Crit Care Clin. 2024;40(1):37-56. doi:10.1016/j.ccc.2023.05.001 PMID: 37973356
2. Kislitsina ON, Rich JD, Gulati R, et al. Shock - Classification and Pathophysiological Principles of Therapeutics. Curr Cardiol Rev. 2019;15(2):102-113. doi:10.2174/1573403X15666181212125024 PMID: 30543176
3. Patel S, Holden K, Chang M, et al. Shock. Crit Care Nurs Q. 2022;45(3):225-232. doi:10.1097/CNQ.0000000000000407 PMID: 35617089

# Acute Altered Mental Status: Structured Approach

## Clinical Setup
A 55-year-old man is found unresponsive by his family. He has a history of alcoholism and poorly controlled diabetes. On arrival, his airway is intact, respirations are 10 breaths per minute, blood pressure is 100/60 mm Hg, heart rate 90 beats per minute and oxygen saturation 89 %. What is the systematic approach to his altered mental status?

## Teaching Objectives
- Employ a structured evaluation algorithm for acute altered mental status
- Recognize high-yield reversible causes and implement timely interventions

## Teaching Points
1. Begin with the ABCs: assess airway, breathing and circulation. Provide supplemental oxygen, secure the airway if the patient cannot protect it and establish intravenous access. Quickly check capillary blood glucose and administer 50 mL of 50 % dextrose if hypoglycemia is present [Ref 2]. Naloxone should be given if opioid overdose is suspected.
2. Perform a focused neurologic examination including Glasgow Coma Scale, pupillary response and lateralizing signs. Obtain vital signs and laboratory studies (electrolytes, renal and hepatic function, arterial blood gas). Consider broad categories using the mnemonic "AEIOU TIPS": Alcohol, Endocrine/Electrolytes, Infection, Opiates/Oxygen, Uremia, Trauma, Insulin (hypo/ hyperglycemia), Psychosis/Poisoning, Stroke/Structural seizures [Ref 2].
3. Hyperosmolar hyperglycemic state (HHS) should be suspected when plasma glucose exceeds 600 mg/dL with serum osmolality >320 mOsm/kg and minimal ketosis. Management includes aggressive isotonic fluid resuscitation, insulin therapy and correction of electrolytes. Cerebral edema can be minimized by gradual glucose correction [Ref 3].
4. Delirium is common in hospitalized patients (15-50 %) and associated with increased mortality. Risk factors include advanced age, polypharmacy and sensory impairment. Management focuses on identifying and reversing precipitants (infection, medications, metabolic disturbances) and employing nonpharmacologic strategies (reorientation, sleep hygiene) [Ref 1].
5. In alcohol-use disorder or malnutrition, consider Wernicke encephalopathy, characterized by the triad of encephalopathy, oculomotor dysfunction and gait ataxia. Administer thiamine 200 mg IV three times daily before glucose to prevent precipitating Korsakoff syndrome [Ref 4].

## Key Numbers
- Delirium prevalence: affects 15-50 % of hospitalized older adults and increases mortality and length of stay [Ref 1].
- HHS diagnostic criteria: blood glucose >600 mg/dL, serum osmolality >320 mOsm/kg and absent or mild ketonemia; mortality ranges from 10-20 % [Ref 3].
- Wernicke encephalopathy treatment: administer thiamine 200 mg IV three times daily; improvement often begins within hours and should continue for at least three days [Ref 4].

## Teaching Pearl
Always give thiamine before administering glucose in patients at risk for thiamine deficiency. Glucose without thiamine can precipitate Wernicke encephalopathy or Korsakoff syndrome. Maintain a high index of suspicion in malnourished, alcoholic or bariatric patients [Ref 4].

## Boards + Bedside Tie-In
Board examinations frequently present undifferentiated coma scenarios requiring immediate bedside actions-check glucose, give naloxone, secure airway-followed by recognition of specific conditions such as HHS or Wernicke. At the bedside, following a structured algorithm prevents omission of reversible causes and ensures timely interventions.

## References
1. Mattison MLP. Delirium. Ann Intern Med. 2020;173(7):ITC49-ITC64. doi:10.7326/AITC202010060 PMID: 33017552
2. Erkkinen MG, Berkowitz AL. A Clinical Approach to Diagnosing Encephalopathy. Am J Med. 2019;132(10):1142-1147. doi:10.1016/j.amjmed.2019.07.001 PMID: 31330129
3. Lovegrove SS, Dubbs SB. Hyperosmolar Hyperglycemic State. Emerg Med Clin North Am. 2023;41(4):687-696. doi:10.1016/j.emc.2023.07.001 PMID: 37758417
4. Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol. 2010;17(12):1408-1418. doi:10.1111/j.1468-1331.2010.03153.x PMID: 20642790

# The Crashing Patient: First Five Minutes

## Clinical Setup
You are called to evaluate a 65-year-old inpatient who suddenly becomes unresponsive and bradycardic. The telemetry alarm shows an asystole pattern. What should occur in the first five minutes to stabilize this patient?

## Teaching Objectives
- Execute a structured approach to the crashing patient emphasizing airway, breathing and circulation
- Identify reversible causes and prioritize interventions without delay

## Teaching Points
1. Activate emergency response and assess responsiveness. If the patient is pulseless, begin high-quality chest compressions at a rate of 100-120 per minute and depth of 5-6 cm on the lower half of the sternum. Ensure full chest recoil and minimize interruptions [Ref 1].
2. Airway and breathing: provide 100 % oxygen via bag-valve-mask and attach monitors (ECG, pulse oximetry, noninvasive blood pressure). Intubation should not delay chest compressions; once an advanced airway is placed, deliver 10 breaths per minute without pausing compressions [Ref 1].
3. Defibrillation: check the rhythm quickly. For shockable rhythms (ventricular fibrillation or pulseless ventricular tachycardia), deliver a biphasic shock at 200 J and resume compressions immediately. For asystole or pulseless electrical activity, continue compressions and administer epinephrine 1 mg IV every 3-5 minutes while searching for reversible causes [Ref 1].
4. Systematically evaluate reversible causes using the "Hs and Ts": hypovolemia, hypoxia, hydrogen ion (acidosis), hypo/hyperkalemia, hypothermia, tension pneumothorax, tamponade, toxins, thrombosis (cardiac or pulmonary) and trauma. Treat each cause as rapidly as possible-e.g., needle decompression for tension pneumothorax, pericardiocentesis for tamponade, fluids for hypovolemia [Ref 2].
5. Assign roles among team members (compressor, airway manager, medication administrator, recorder) and communicate clearly. Rapidly secure intravenous or intraosseous access for drug delivery while preparing for advanced airway management [Ref 2].

## Key Numbers
- Chest compression rate: 100-120 per minute; depth: 5-6 cm in adults; ratio of compressions to breaths without advanced airway: 30:2 [Ref 1].
- Epinephrine dosing: 1 mg IV every 3-5 minutes during pulseless arrest; early administration improves return of spontaneous circulation [Ref 1].
- Reversible causes: remember five Hs (Hypovolemia, Hypoxia, Hydrogen ion [acidosis], Hypo-/hyperkalemia, Hypothermia) and five Ts (Tension pneumothorax, Tamponade, Toxins, Thrombosis, Trauma) as a rapid checklist [Ref 2].

## Common Pitfall
Delaying chest compressions for airway management or rhythm analysis reduces survival. Prioritize uninterrupted compressions; intubate only after initial cycles and ensure continuous compressions during intubation attempts. Avoid prolonged pulse checks-limit to 10 seconds [Ref 1].

## Boards + Bedside Tie-In
Boards test adherence to resuscitation algorithms, including compression rate and reversible causes. At the bedside, a structured team approach with clearly assigned roles, immediate CPR and early defibrillation is critical for survival. Familiarity with the Hs and Ts ensures reversible causes are not overlooked while the code continues.

## References
1. American Heart Association. Highlights of the 2020 American Heart Association Guidelines for CPR and ECC. 2020.
2. EMCrit/Internet Book of Critical Care. Approach to the Crashing Patient. 2024.

# Approach to Inpatient Hyponatremia

## Clinical Setup
A 68-year-old man admitted for pneumonia is found to have a sodium of 124 mEq/L, down from 138 mEq/L on admission three days ago. He is alert and euvolemic on examination. How should his hyponatremia be evaluated and managed?

## Teaching Objectives
- Apply a stepwise algorithm using volume status, serum osmolality and urine studies
- Avoid complications by adhering to safe correction thresholds

## Teaching Points
1. Confirm true hypotonic hyponatremia by measuring serum osmolality; values <280 mOsm/kg indicate hypotonic hyponatremia. Next, assess volume status clinically (hypovolemic, euvolemic or hypervolemic) and obtain urine osmolality and urine sodium to narrow the differential [Ref 1].
2. Hypovolemic hyponatremia (e.g., diuretic use, vomiting) is characterized by clinical volume depletion, high urine osmolality and urine sodium <20 mEq/L; treatment is isotonic saline to restore volume and suppress antidiuretic hormone. Euvolemic hyponatremia often results from the syndrome of inappropriate antidiuresis (SIADH), with urine osmolality >100 mOsm/kg and urine sodium >30 mEq/L; treat with fluid restriction and address underlying triggers [Ref 1].
3. Hypervolemic hyponatremia occurs in cirrhosis, heart failure or nephrotic syndrome. It presents with edema and ascites; management includes fluid and sodium restriction, loop diuretics and treatment of the underlying condition. Vasopressin receptor antagonists (e.g., tolvaptan) can increase serum sodium but require careful monitoring [Ref 2].
4. Avoid rapid correction to prevent osmotic demyelination syndrome. For chronic hyponatremia, limit serum sodium increase to 8-10 mEq/L in 24 hours; high-risk patients (malnutrition, alcoholism, liver disease) should be corrected more slowly (4-6 mEq/L per 24 hours) [Ref 1, Ref 2].
5. Severely symptomatic patients (e.g., seizures, coma) require hypertonic saline (3 % sodium chloride) delivered as 100 mL boluses over 10 minutes, repeated up to two times while monitoring sodium closely. Once symptoms resolve, slow correction according to the limits above [Ref 1].

## Key Numbers
- Serum osmolality <280 mOsm/kg: defines hypotonic hyponatremia; urine osmolality >100 mOsm/kg suggests impaired water excretion such as SIADH [Ref 1].
- Correction rate: maximum 8-10 mEq/L per 24 hours for chronic hyponatremia; limit to 4-6 mEq/L per 24 hours in high-risk patients to avoid osmotic demyelination [Ref 1, Ref 2].
- Hypertonic saline bolus: 100 mL of 3 % NaCl over 10 minutes for severe symptoms, repeated up to two doses with goal of 4-6 mEq/L rise in sodium [Ref 1].

## Common Pitfall
Obtaining urine studies after starting IV fluids obscures the diagnosis. Always collect urine osmolality and sodium before administering significant volumes of fluid, and document any fluids already given to interpret results correctly [Ref 1].

## Boards + Bedside Tie-In
Board questions frequently present hyponatremia with serum and urine values, asking for diagnosis or next step. At the bedside, the same algorithm applies but volume assessment may be challenging; when uncertain, a trial of isotonic saline can help distinguish hypovolemic hyponatremia (sodium rises) from SIADH (sodium falls or remains low) [Ref 1].

## References
1. Kugler JP, Hustead T. Hyponatremia and hypernatremia in the elderly. Am Fam Physician. 2000;61(12):3623-3630. PMID: 10892634
2. Orman ES, Fortune BE, Vilar G, et al. AGA Clinical Practice Update on the Management of Ascites, Volume Overload, and Hyponatremia in Cirrhosis. Gastroenterology. 2025;168(6):990-1002. PMID: 41114681

# DVT and PE: Risk Stratification Essentials

## Clinical Setup
A 55-year-old woman presents with acute shortness of breath and pleuritic chest pain. She has unilateral leg swelling and a history of recent knee surgery. Her blood pressure is stable and oxygen saturation is 94 %. How should venous thromboembolism (VTE) risk be stratified and managed?

## Teaching Objectives
- Apply clinical prediction rules to assess pre-test probability of deep vein thrombosis (DVT) and pulmonary embolism (PE)
- Determine inpatient versus outpatient management using severity indices

## Teaching Points
1. For suspected DVT, use the Wells score: assign points for active cancer, paralysis or immobilization, recent bed rest, localized tenderness, swelling of the entire leg, calf diameter difference >3 cm, pitting edema, and previously documented DVT. A score ≥2 indicates moderate to high probability and warrants duplex ultrasonography; a score ≤1 with a negative D-dimer effectively excludes DVT [Ref 3].
2. For suspected PE, the Wells criteria or the revised Geneva score stratify risk. Wells factors include signs of DVT, heart rate >100 bpm, recent surgery or immobilization, prior PE/DVT, hemoptysis, and malignancy. A score >4 suggests high probability and mandates CT pulmonary angiography; ≤4 combined with a negative D-dimer rules out PE [Ref 1]. The Pulmonary Embolism Rule-out Criteria (PERC) can identify very low-risk patients who require no further testing [Ref 2].
3. After diagnosis, use the Simplified Pulmonary Embolism Severity Index (sPESI) or Hestia criteria to determine suitability for outpatient management. sPESI assigns one point each for age >80 years, history of cancer, chronic cardiopulmonary disease, heart rate ≥110 bpm, systolic blood pressure <100 mm Hg and oxygen saturation <90 %. A score of 0 predicts <1 % 30-day mortality and supports outpatient anticoagulation; any point ≥1 indicates the need for inpatient monitoring [Ref 6].
4. The presence of right ventricular dysfunction on echocardiography, elevated cardiac biomarkers (troponin, BNP) or concomitant DVT portends higher risk of early mortality and may warrant thrombolysis or catheter-directed therapy in select patients. Close monitoring in a monitored setting is advised [Ref 6].
5. For hospitalized or surgical patients, prophylactic measures prevent VTE. Low-molecular-weight heparin 40 mg subcutaneously once daily or unfractionated heparin 5 000 units three times daily reduces incidence by roughly 60 % in medical inpatients. When anticoagulation is contraindicated, use mechanical prophylaxis (intermittent pneumatic compression devices). Early ambulation is essential [Ref 7].

## Key Numbers
- Wells score for DVT: ≥2 points indicates moderate to high probability; ≤1 point with negative D-dimer excludes DVT in most patients [Ref 3].
- Simplified PESI score: 0 points predicts <1 % 30-day mortality; ≥1 point is associated with 8-10 % mortality and prompts inpatient care [Ref 6].
- Prophylactic enoxaparin 40 mg daily reduces VTE by ~60 % in high-risk inpatients; mechanical methods are less effective when used alone [Ref 7].

## Common Pitfall
Ordering imaging in very low-risk patients without applying the Wells, Geneva or PERC rules leads to unnecessary radiation exposure and false positives. Conversely, failing to recognize high-risk features (e.g., hypotension, right ventricular strain) delays life-saving therapy. Always stratify risk before testing and treat promptly when probability is high [Ref 1, Ref 6].

## Boards + Bedside Tie-In
Exam questions often require choosing the next test based on a clinical prediction rule. In practice, applying the Wells and sPESI scores streamlines evaluation, minimizes unnecessary imaging and identifies patients appropriate for outpatient treatment. Always reassess risk factors such as cancer, immobilization and prior VTE when determining duration of anticoagulation.

## References
1. Giordano NJ, Jansson PS, Young MN, et al. Epidemiology, Pathophysiology, Stratification, and Natural History of Pulmonary Embolism. Tech Vasc Interv Radiol. 2017;20(3):135-140. PMID: 29029707
2. Wenger N, Sebastian T, Murugan R, et al. Pulmonary embolism and deep vein thrombosis: Similar but different. Thromb Res. 2021;198:154-165. PMID: 34454241
3. Lopez JA, Kearon C, Lee AY. Deep venous thrombosis. Hematology Am Soc Hematol Educ Program. 2004;2004:439-456. PMID: 15561697
4. Becattini C, Cohen AT, Agnelli G, et al. Risk Stratification of Patients With Acute Symptomatic Pulmonary Embolism Based on Presence or Absence of Lower Extremity DVT. Chest. 2016;150(2):358-365. PMID: 26204122
5. Kraft CT, Janis JE. Deep Venous Thrombosis Prophylaxis. Clin Plast Surg. 2020;47(3):325-333. PMID: 32448477
6. Szymanski K, Weber C, Szamosi A, et al. A review of venous thromboembolism for the hospitalist. Postgrad Med. 2025;137(4):558-566. PMID: 39804968
7. Pribish AM, Secemsky EA, Schmaier AA. Venous Thromboembolism for the Practicing Cardiologist. Cardiol Clin. 2021;39(2):207-224. PMID: 34686267

# Community-Acquired Pneumonia: Severity and Antibiotics

## Clinical Setup
A 45-year-old man presents with fever, productive cough, pleuritic chest pain and confusion. His respiratory rate is 32 breaths per minute, blood pressure 88/55 mm Hg and oxygen saturation 89 % on room air. What tools and therapies guide management of his community-acquired pneumonia (CAP)?

## Teaching Objectives
- Utilize severity scoring systems to determine the need for hospitalization and intensive care
- Select empiric antibiotics based on severity and risk factors

## Teaching Points
1. Assess severity using validated tools. CURB-65 awards one point each for confusion, urea >7 mmol/L (20 mg/dL), respiratory rate ≥30, blood pressure <90/60 mm Hg and age ≥65. Scores 0-1 suggest outpatient management; score 2 warrants hospital admission; ≥3 or evidence of septic shock or respiratory failure indicates ICU care [Ref 3].
2. The Pneumonia Severity Index (PSI) incorporates demographics, comorbidities, physical exam findings and laboratory values to stratify into risk classes I-V. Classes I-II (<70 points) are usually managed as outpatients, class III (71-90) may be observed briefly and classes IV-V (>90) require hospitalization [Ref 1].
3. Empiric therapy depends on comorbidities and disease severity. Outpatients without comorbidities: amoxicillin 1 g three times daily or doxycycline 100 mg twice daily for 5-7 days. Outpatients with comorbidities: amoxicillin-clavulanate 875/125 mg twice daily plus azithromycin or doxycycline, or a respiratory fluoroquinolone alone. Inpatients (non-ICU): intravenous ceftriaxone or ampicillin-sulbactam plus azithromycin, or a respiratory fluoroquinolone. ICU patients: ceftriaxone plus either azithromycin or a fluoroquinolone; add vancomycin or linezolid for MRSA risk and piperacillin-tazobactam for Pseudomonas risk [Ref 1, Ref 3, Ref 5].
4. Administer antibiotics promptly-ideally within 4 hours of presentation. Once clinical stability is achieved (afebrile, heart rate <100, respiratory rate <24, oxygen saturation >90 % on room air, normal mental status), transition to oral therapy and plan a total course of 5-7 days for uncomplicated CAP [Ref 1].
5. Identify patients requiring ICU by major criteria (mechanical ventilation or septic shock requiring vasopressors) or minor criteria (respiratory rate ≥30, PaO₂/FiO₂ ≤250, multilobar infiltrates, confusion, uremia, leukopenia, thrombocytopenia, hypothermia, hypotension requiring fluids). Meeting one major or three minor criteria indicates ICU admission [Ref 3].

## Key Numbers
- CURB-65: 0-1 point (outpatient), 2 points (inpatient), ≥3 points or shock (ICU). Urea threshold is >7 mmol/L (20 mg/dL) [Ref 3].
- PSI: Classes I-II (<70 points) have <1 % mortality; classes IV-V (>90 points) have mortality 8-30 % and require hospital care [Ref 1].
- Standard treatment duration: 5-7 days for uncomplicated CAP once patient is afebrile for 48 hours and clinically stable [Ref 1].

## Common Pitfall
Delaying empiric antibiotics while awaiting imaging or microbiology results increases mortality. Initiate broad-spectrum therapy based on clinical suspicion and refine therapy once culture data and susceptibilities are available [Ref 1].

## Boards + Bedside Tie-In
Board scenarios frequently ask for the next step when presented with CAP severity scores; memorize CURB-65 cutoffs and major/minor criteria. Clinically, early scoring assists decisions on admission and ICU triage, while knowledge of guideline-recommended empiric regimens ensures appropriate therapy tailored to comorbidities and local resistance patterns.

## References
1. Lanks CW, Musani AI, Hsia DW. Community-acquired Pneumonia and Hospital-acquired Pneumonia. Med Clin North Am. 2019;103(3):487-501. PMID: 30955516
2. Rider AC, Frazee BW. Community-Acquired Pneumonia. Emerg Med Clin North Am. 2018;36(4):665-683. PMID: 30296998
3. Martin-Loeches I, Garduno A, Waterer G, et al. Choosing antibiotic therapy for severe community-acquired pneumonia. Curr Opin Infect Dis. 2022;35(2):147-156. PMID: 35190510
4. Nair GB, Niederman MS. Updates on community acquired pneumonia management in the ICU. Pharmacol Ther. 2021;217:107663. PMID: 32805298
5. Cassiere HA, Niederman MS. Community-acquired pneumonia. Dis Mon. 1998;44(3):95-136. PMID: 9858958

# Approach to Fever in the Hospitalized Patient

## Clinical Setup
A 60-year-old man on post-operative day 3 after colectomy develops a fever of 38.5 °C. He has mild tachycardia but is hemodynamically stable. What systematic approach helps identify the cause and guide management?

## Teaching Objectives
- Distinguish infectious from non-infectious causes of hospital-acquired fever
- Use a timing-based framework to guide evaluation and management

## Teaching Points
1. Fever in hospitalized patients may be infectious (pneumonia, urinary tract infection, surgical site infection, line-associated bloodstream infection) or non-infectious (drug fever, deep vein thrombosis, pulmonary embolism, transfusion reaction). Begin with a focused history and physical examination, review vital signs and examine operative sites, catheters and drains [Ref 1].
2. Post-operative fever is often categorized by timing: days 1-2 (wind-atelectasis or pneumonia), days 3-4 (water-urinary tract infection), days 5-7 (wound-surgical site infection), days 7-10 (walking-deep vein thrombosis/pulmonary embolism) and any time (wonder drugs-drug fever or transfusion reactions). This mnemonic guides targeted evaluation and prophylactic measures such as incentive spirometry, early ambulation and catheter care [Ref 1].
3. Evaluate common sources: obtain chest imaging and sputum cultures for pulmonary symptoms, urinalysis and culture for urinary symptoms, and ultrasound of veins for suspected DVT. Inspect central lines for erythema or purulence; if infection is suspected, remove or exchange the catheter and obtain paired blood cultures from catheter and peripheral sites [Ref 1].
4. Drug fever should be considered when no source is identified despite thorough workup. Features include persistent fever, relative bradycardia, eosinophilia and rash. Common culprits are beta-lactam antibiotics, sulfonamides, anticonvulsants and heparin. Fever typically resolves within 72 hours of discontinuing the offending agent [Ref 2].
5. Urticaria and fever may indicate an urticarial vasculitis or serum sickness-like reaction. Evaluate for associated arthralgias, lymphadenopathy and complement consumption. Management includes stopping the offending drug and administering antihistamines or corticosteroids when needed [Ref 3].

## Key Numbers
- Surgical site infections occur in 2-5 % of clean-contaminated surgeries, usually manifesting between post-operative days 5 and 7 [Ref 1].
- Drug fever accounts for up to 10 % of febrile episodes in hospitalized patients and typically resolves within three days after discontinuation of the offending medication [Ref 2].
- Central line-associated bloodstream infections occur at approximately 1-2 episodes per 1 000 catheter days; prompt removal or exchange of the catheter reduces morbidity [Ref 1].

## Common Pitfall
Empirically starting broad-spectrum antibiotics before evaluating for non-infectious causes leads to unnecessary drug exposure and antimicrobial resistance. Always perform a focused assessment, obtain relevant cultures and imaging, and consider non-infectious etiologies before initiating antimicrobial therapy [Ref 1].

## Boards + Bedside Tie-In
Exams often test the 5 Ws framework and appropriate diagnostic steps. At the bedside, systematically reviewing lines, wounds and medications and using timing to prioritize evaluations helps identify the source quickly and avoids unnecessary treatments. Recognize drug fever and transfusion reactions to prevent misclassification as sepsis.

## References
1. Dionigi R, Dionigi G, Rovere P, et al. Postoperative fever. Surg Infect (Larchmt). 2006;7(s2):S27-S30. PMID: 16895496
2. Someko H, Kataoka Y, Obara T. Drug fever: a narrative review. Ann Clin Epidemiol. 2023;5(4):95-106. PMID: 38504950
3. Micheletti R, Rosenbach M. An approach to the hospitalized patient with urticaria and fever. Dermatol Ther. 2011;24(4):459-471. PMID: 21410608

# C. difficile Infection: Diagnosis and Treatment

## Clinical Setup
A 64-year-old woman develops profuse watery diarrhea and abdominal cramping on day 7 of a clindamycin course for a dental infection. She has a leukocyte count of 17 000/µL and creatinine of 1.6 mg/dL (baseline 0.9). How should Clostridioides difficile infection (CDI) be diagnosed and treated?

## Teaching Objectives
- Identify risk factors and implement appropriate diagnostic testing for CDI
- Apply severity-based treatment strategies and recurrence management

## Teaching Points
1. Risk factors for CDI include recent antibiotic use (particularly clindamycin, fluoroquinolones and broad-spectrum beta-lactams), hospitalization, advanced age, proton pump inhibitor therapy and immunosuppression. Symptoms typically include ≥3 unformed stools in 24 hours and abdominal pain [Ref 3].
2. Use a multistep testing algorithm. Only test unformed stool. Start with glutamate dehydrogenase (GDH) antigen and toxin enzyme immunoassay; if results are discordant, perform nucleic acid amplification (PCR) for toxigenic C. difficile. Avoid testing for cure and do not test asymptomatic patients [Ref 4].
3. Classify disease severity. Non-severe: WBC <15 000/µL and creatinine <1.5 mg/dL; severe: WBC ≥15 000/µL or creatinine ≥1.5 mg/dL; fulminant: hypotension, shock, ileus or megacolon. Initial treatment for non-severe or severe CDI is oral vancomycin 125 mg four times daily for 10 days or fidaxomicin 200 mg twice daily for 10 days. Fulminant CDI requires vancomycin 500 mg orally every six hours plus intravenous metronidazole 500 mg every eight hours, with early surgical consultation [Ref 1, Ref 4].
4. For a first recurrence, use fidaxomicin if not used initially or a pulsed-tapered vancomycin regimen (125 mg four times daily for 10 days, then 125 mg twice daily for a week, once daily for a week and every 2-3 days for 2-8 weeks). For second or subsequent recurrences, consider fecal microbiota transplantation after an appropriate antibiotic course [Ref 1, Ref 3].
5. Infection control is critical: wash hands with soap and water (alcohol sanitizers do not kill spores), implement contact isolation and clean the environment with sporicidal agents. Discontinue unnecessary antibiotics and proton pump inhibitors to reduce recurrence risk [Ref 2].

## Key Numbers
- Fulminant CDI mortality: can exceed 30 %; early high-dose oral vancomycin plus intravenous metronidazole and surgical evaluation reduce mortality [Ref 1].
- Recurrence rate: 20-25 % after initial treatment; risk increases with each subsequent episode [Ref 1].
- Fidaxomicin versus vancomycin: fidaxomicin reduces recurrence (≈15 %) compared with vancomycin (≈25 %) but may be limited by cost [Ref 3].

## Common Pitfall
Testing formed stools or patients without diarrhea leads to overdiagnosis and unnecessary treatment. Always confirm the presence of unexplained diarrhea and test only unformed stool. Avoid treating asymptomatic colonization [Ref 4].

## Boards + Bedside Tie-In
Exam questions focus on risk factors, testing algorithms and selection of therapy based on severity and recurrence. Clinically, rapid identification and appropriate therapy prevent progression to fulminant disease. Strict infection control measures and judicious antibiotic use reduce transmission and recurrence.

## References
1. Kelly CR, Fischer M, Allegretti JR, et al. ACG Clinical Guidelines: Prevention, Diagnosis, and Treatment of Clostridioides difficile Infections. Am J Gastroenterol. 2021;116(6):1124-1147. PMID: 34003176
2. McDonald LC, Gerding DN, Johnson S, et al. Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update by IDSA and SHEA. Clin Infect Dis. 2018;66(7):987-994. PMID: 29462280
3. Cymbal M, Chatterjee A, Hamill L, et al. Management of Clostridioides difficile Infection: Diagnosis, Treatment, and Future Perspectives. Am J Med. 2024;137(4):350-361. PMID: 38508330
4. Czepiel J, Drozdz M, Pituch H, et al. Clostridium difficile infection: review. Eur J Clin Microbiol Infect Dis. 2019;38(7):1211-1221. PMID: 30945014

# UTI vs Asymptomatic Bacteriuria

## Clinical Setup
A 70-year-old woman residing in a nursing home is noted to have foul-smelling urine during routine care. She has no dysuria, frequency, fever or flank pain. A screening urinalysis shows pyuria and the urine culture grows >100 000 CFU/mL of Escherichia coli. Should this be treated?

## Teaching Objectives
- Distinguish true urinary tract infection (UTI) from asymptomatic bacteriuria
- Apply evidence-based indications for treatment of bacteriuria

## Teaching Points
1. Symptomatic UTI requires both bacteriuria and symptoms such as dysuria, frequency, urgency, suprapubic pain, hematuria, flank pain or fever. Asymptomatic bacteriuria is defined as ≥10⁵ CFU/mL of a uropathogen in a urine specimen (two consecutive specimens in women, one in men) without urinary symptoms [Ref 3].
2. Treatment of asymptomatic bacteriuria is recommended only in specific situations: pregnancy (because of risk of pyelonephritis and preterm birth), prior to urologic procedures that involve mucosal bleeding and in renal transplant recipients within the first month post-transplant. Treatment typically involves a 4-7-day course of a narrow-spectrum antibiotic based on culture sensitivity [Ref 2, Ref 6].
3. Do not treat asymptomatic bacteriuria in catheterized patients, the elderly in long-term care, patients with diabetes or spinal cord injury. Evidence shows no reduction in complications or mortality with treatment, but harms include Clostridioides difficile infection and antimicrobial resistance [Ref 3].
4. Diagnostic evaluation of suspected UTI includes obtaining a midstream clean-catch urine culture and urinalysis. Pyuria is common in older adults and catheterized patients and is not diagnostic of infection. In symptomatic catheter-associated UTI, a threshold of ≥10³ CFU/mL is considered significant; for non-catheterized symptomatic cystitis, ≥10⁵ CFU/mL is used [Ref 6].
5. When symptoms are present, choose empiric antibiotics based on local resistance patterns. For uncomplicated cystitis, first-line agents include nitrofurantoin 100 mg twice daily for 5 days, trimethoprim-sulfamethoxazole 160/800 mg twice daily for 3 days (if local resistance <20 %) or single-dose fosfomycin 3 g. Pyelonephritis or complicated UTIs require longer courses (7-14 days) with agents such as fluoroquinolones or third-generation cephalosporins [Ref 6].

## Key Numbers
- Asymptomatic bacteriuria prevalence: up to 50 % in women in long-term care facilities; treatment does not improve outcomes [Ref 3].
- Diagnostic thresholds: ≥10⁵ CFU/mL in a clean-catch specimen defines significant bacteriuria; ≥10³ CFU/mL is used for symptomatic catheter-associated UTI [Ref 6].
- Duration of therapy: 3-5 days for uncomplicated cystitis; 7-14 days for pyelonephritis or complicated infections [Ref 6].

## Common Pitfall
Treating positive urine cultures in asymptomatic patients leads to unnecessary antibiotic use, adverse drug events and increased resistance. Always correlate culture results with clinical symptoms before initiating therapy [Ref 3].

## Boards + Bedside Tie-In
Exams often ask when to treat asymptomatic bacteriuria-remember that only pregnant women, patients undergoing invasive urologic procedures and early post-renal transplant recipients require therapy. At the bedside, avoid ordering urine cultures for non-specific changes in urine odor or color and focus on symptomatic assessment to guide management.

## References
1. Geerlings SE. Clinical Presentations and Epidemiology of Urinary Tract Infections. Microbiol Spectr. 2016;4(5). PMID: 27780014
2. Ansaldi Y, Martinez de Tejada Weber B. Urinary tract infections in pregnancy. Clin Microbiol Infect. 2023;29(10):1205-1211. PMID: 36031053
3. Gupta K, Grigoryan L, Trautner B. Urinary Tract Infection. Ann Intern Med. 2017;167(7):ITC49-ITC64. PMID: 28973215
4. Czajkowski K, Bros-Konopielko M, Teliga-Czajkowska J. Urinary tract infection in women. Prz Menopauzalny. 2021;20(4):194-198. PMID: 33935619
5. Foxman B. Urinary tract infection syndromes. Infect Dis Clin North Am. 2014;28(1):1-13. PMID: 24484571
6. Al Lawati H, Blair BM, Larnard J. Urinary Tract Infections: Core Curriculum 2024. Am J Kidney Dis. 2024;83(4):535-548. PMID: 37906240

# Multimodal Pain Management in the Inpatient Setting

## Clinical Setup
A 60-year-old man is two days post-total knee arthroplasty and complains of severe pain rated 8/10 despite intermittent morphine doses. He is drowsy and hesitant to participate in physical therapy. How can his pain be managed more effectively?

## Teaching Objectives
- Implement multimodal analgesia to improve pain control and reduce opioid requirements
- Balance efficacy with safety by considering patient comorbidities and monitoring adverse effects

## Teaching Points
1. Multimodal analgesia uses combinations of analgesics with different mechanisms-acetaminophen, non-steroidal anti-inflammatory drugs (NSAIDs), gabapentinoids, local anesthetics, NMDA receptor antagonists and opioids-to achieve synergistic pain relief and decrease opioid consumption [Ref 1]. Scheduled non-opioid analgesics form the foundation of therapy.
2. Administer acetaminophen 1,000 mg every 6 hours (maximum 4 g/day; reduce to 2-3 g/day in hepatic impairment) to provide baseline analgesia. Add NSAIDs or COX-2 inhibitors if renal function and bleeding risk allow; limit duration to 3-5 days and avoid in creatinine clearance <30 mL/min [Ref 3].
3. Regional techniques provide targeted analgesia with opioid-sparing effects. Peripheral nerve blocks (e.g., femoral or adductor canal block for knee surgery) and neuraxial analgesia (epidural or spinal) reduce pain scores and facilitate early mobilization. Continuous catheter techniques allow titratable dosing but require monitoring for hypotension and motor weakness [Ref 6].
4. Adjunct medications such as gabapentin or pregabalin decrease central sensitization and lower opioid requirements but may cause dizziness or sedation. Ketamine infusions at subanesthetic doses (0.1-0.5 mg/kg/h) provide analgesia and are useful in opioid-tolerant patients; consensus guidelines recommend continuous monitoring for psychomimetic effects and hemodynamic changes [Ref 4].
5. Incorporate nonpharmacologic interventions-ice, heat, transcutaneous electrical nerve stimulation, physical therapy, psychological support and relaxation techniques-to enhance pain control and improve functional outcomes. Tailor the regimen to the patient's comorbidities, renal and hepatic function and risk of delirium [Ref 2, Ref 5].

## Key Numbers
- Acetaminophen: maximum 4,000 mg/day; reduce to 2,000-3,000 mg/day in liver disease [Ref 3].
- Ketamine infusion: analgesic dosing 0.1-0.5 mg/kg/h reduces opioid requirements without significant respiratory depression [Ref 4].
- NSAIDs: contraindicated in creatinine clearance <30 mL/min and in patients at high risk of gastrointestinal bleeding; when used, limit to 3-5 days [Ref 3].

## Common Pitfall
Relying solely on opioids leads to oversedation, respiratory depression and delirium. Incorporating scheduled non-opioid analgesics and regional techniques reduces opioid requirements and improves functional recovery [Ref 3, Ref 6].

## Boards + Bedside Tie-In
Exams may test knowledge of multimodal pain regimens and safe dosing. At the bedside, opioid-sparing strategies enable early mobilization and rehabilitation after surgery. Regularly reassess pain control and adjust the regimen based on efficacy and adverse effects.

## References
1. Joshi GP. Enhanced recovery pathways for ambulatory surgery. Curr Opin Anaesthesiol. 2020;33(6):727-734. PMID: 33002957
2. Wally MK, Hsu JR, Seymour RB. Musculoskeletal Pain Management and Patient Mental Health and Well-being. J Orthop Trauma. 2022;36(suppl 1):S13-S19. PMID: 36121327
3. Czernicki M, Kunnumpurath S, Tomasz H, et al. Perioperative Pain Management in the Critically Ill Patient. Curr Pain Headache Rep. 2019;23(4):28. PMID: 30977001
4. Schwenk ES, Viscusi ER, Bhatia A, et al. Consensus Guidelines on the Use of Intravenous Ketamine Infusions for Acute Pain Management. Reg Anesth Pain Med. 2018;43(5):456-466. PMID: 29870457
5. Al-Saidi I, Russell A, Dizdarevic A. The Acute Perioperative Pain Service: Impact, Organization, and Future Directions. Curr Pain Headache Rep. 2023;27(6):563-570. PMID: 37354296
6. Baratta JL, Deiling B, Domino KB, et al. Total joint replacement in ambulatory surgery. Best Pract Res Clin Anaesthesiol. 2023;37(2):197-212. PMID: 37929822

# Goals of Care Conversations: Framework

## Clinical Setup
A 68-year-old man with metastatic lung cancer is admitted for pneumonia. He is uncertain about his prognosis and has not completed an advance directive. How should the resident initiate a goals-of-care conversation?

## Teaching Objectives
- Use structured communication frameworks to explore patient values and preferences
- Align medical recommendations with patient goals and document the conversation

## Teaching Points
1. Begin by assessing the patient's understanding of his illness and asking permission to discuss future care. Use open-ended questions to explore his values, fears and what matters most to him. Clarify who should be involved in decision making (family, surrogate) [Ref 1].
2. Apply structured communication tools such as "Ask-Tell-Ask" or the Serious Illness Conversation Guide. Ask about the patient's goals and understanding, tell information about prognosis in clear language and then ask for his reaction and questions. Use silence and reflective statements to allow processing [Ref 1, Ref 3].
3. Respond empathetically to emotions using the NURSE mnemonic-Name the emotion, Understand its source, Respect the patient's experience, Support the patient and Explore further. Acknowledge feelings explicitly and avoid medical jargon [Ref 3].
4. Align recommendations with the patient's values. Discuss options including disease-directed treatments, palliative care, hospice and life-sustaining interventions (resuscitation, mechanical ventilation). Emphasize that decisions can be revisited and that the goal is to support his priorities and quality of life [Ref 1, Ref 5].
5. Document the conversation in the medical record, including the patient's goals, code status and surrogate decision maker. Communicate the plan to the interprofessional team to ensure continuity. Revisit the conversation periodically as the disease evolves [Ref 5].

## Key Numbers
- Structured communication interventions improve documentation of goals-of-care conversations by 15-20 % and reduce unwanted aggressive treatments by approximately one-third [Ref 2].
- Up to 70 % of seriously ill patients wish to discuss prognosis, but fewer than half report having had such a conversation; using a guide increases the likelihood of these discussions and concordance with preferences [Ref 2].
- Use of the Serious Illness Conversation Guide has been associated with increased hospice utilization and a 33 % reduction in aggressive end-of-life care [Ref 4].

## Teaching Pearl
Asking, "What are you hoping for?" and "What are you worried about?" can open space for patients to share their priorities and fears. These questions anchor the conversation in the patient's values before discussing specific interventions [Ref 3].

## Boards + Bedside Tie-In
Board questions often test frameworks like SPIKES, Ask-Tell-Ask and NURSE. At the bedside, practicing structured conversations and empathic responses improves patient satisfaction, ensures care aligns with goals and reduces clinician burnout.

## References
1. Bernacki RE, Block SD. Communication about serious illness care goals: a review and synthesis of best practices. JAMA Intern Med. 2014;174(12):1994-2003. PMID: 25330167
2. Ryan RE, Connolly M, Jeong W, et al. Interventions for interpersonal communication about end of life care between health practitioners and affected people. Cochrane Database Syst Rev. 2022;4:CD013665. PMID: 35802350
3. Chen W, Chung JOK, Wang Y, et al. End-of-life communication strategies for healthcare professionals: A scoping review. Palliat Med. 2023;37(10):1357-1370. PMID: 36349371
4. Coulter A, Entwistle VA, Stewart M, et al. Personalised care planning for adults with chronic or long-term health conditions. Cochrane Database Syst Rev. 2015;3:CD010523. PMID: 25733495
5. Comer A, Fettig L, Torke AM. Identifying Goals of Care. Med Clin North Am. 2020;104(3):435-445. PMID: 32773044
6. VitalTalk. Serious Illness Conversation Guide. 2023.

# Perioperative Medicine Essentials

## Clinical Setup
A 60-year-old man with hypertension and type 2 diabetes is scheduled for an elective colectomy. He can climb two flights of stairs without symptoms. What preoperative assessment and perioperative strategies should be employed?

## Teaching Objectives
- Conduct comprehensive preoperative risk assessment using validated tools
- Implement evidence-based perioperative management including fluid therapy and enhanced recovery

## Teaching Points
1. Evaluate surgical risk based on the procedure, patient comorbidities and functional status. Use the Revised Cardiac Risk Index (RCRI): one point each for high-risk surgery, history of ischemic heart disease, heart failure, cerebrovascular disease, insulin-dependent diabetes and creatinine >2 mg/dL. Scores 0-1 indicate <1 % risk of major cardiac events; ≥2 points warrant further assessment and optimization (e.g., stress testing, beta-blocker adjustment) [Ref 5].
2. Assess functional capacity. Patients able to achieve >4 metabolic equivalents (e.g., climbing stairs) generally do not need further cardiac testing. Continue beta-blockers and statins, hold ACE inhibitors and angiotensin receptor blockers on the day of surgery to reduce intraoperative hypotension, and achieve tight glycemic control with target HbA1c <7.5 % [Ref 5, Ref 2].
3. Optimize perioperative fluid management. Balanced crystalloids are preferred over normal saline; goal-directed fluid therapy guided by dynamic measures (stroke volume variation, pulse pressure variation) reduces post-operative complications. Avoid both hypovolemia and fluid overload; monitor urine output and hemodynamics closely [Ref 4].
4. Implement enhanced recovery after surgery (ERAS) protocols: permit clear liquids up to 2 hours and light meals up to 6 hours before anesthesia, administer preoperative carbohydrate drinks, use multimodal analgesia, minimize opioid use, encourage early mobilization and initiate early enteral nutrition. These interventions shorten hospital stay and decrease complications [Ref 1, Ref 3].
5. Address nutrition and metabolic support. Evaluate nutritional status and provide protein supplementation for malnourished patients; in bariatric surgery, follow guidelines for perioperative nutrition, including vitamin supplementation. Prehabilitation (exercise, inspiratory muscle training, smoking cessation) improves postoperative outcomes [Ref 2, Ref 3].

## Key Numbers
- RCRI: 0-1 points corresponds to <1 % risk of cardiac complications; ≥2 points elevates risk and merits additional evaluation [Ref 5].
- Fasting guidelines: clear liquids permitted up to 2 hours and solid foods up to 6 hours before anesthesia; prolonged fasting increases insulin resistance [Ref 3].
- Balanced crystalloid use: replacing saline with balanced solutions reduces postoperative acute kidney injury and mortality by approximately 1-2 % [Ref 4].

## Teaching Pearl
Prehabilitation-including aerobic exercise, inspiratory muscle training and nutrition optimization-improves functional capacity and reduces postoperative complications. Encourage patients to engage in prehabilitation for several weeks before elective surgery [Ref 3].

## Boards + Bedside Tie-In
Board questions often test RCRI components and fasting guidelines. At the bedside, applying goal-directed fluid therapy and ERAS protocols improves outcomes and patient satisfaction. Optimizing comorbidities and nutritional status preoperatively ensures safer surgeries.

## References
1. Joshi GP. Enhanced recovery pathways for ambulatory surgery. Curr Opin Anaesthesiol. 2020;33(6):727-734. PMID: 33002957
2. Mechanick JI, Apovian C, Brethauer S, et al. Clinical Practice Guidelines for the Perioperative Nutrition, Metabolic, and Nonsurgical Support of Patients Undergoing Bariatric Procedures - 2019 Update. Endocr Pract. 2019;25(12):1346-1359. PMID: 31682518
3. Afonso AM, Tokita HK, Mavarez VP, et al. Enhanced Recovery Programs in Outpatient Surgery. Anesthesiol Clin. 2019;37(4):647-660. PMID: 31047126
4. Ostermann M, Auzinger G, Sharples P, et al. Perioperative fluid management: evidence-based consensus recommendations. Br J Anaesth. 2024;132(6):956-968. PMID: 39341776
5. Lamperti M, Romero CS, Cristina V, et al. Preoperative assessment of adults undergoing elective noncardiac surgery: Updated guidelines. Eur J Anaesthesiol. 2025;42(1):1-13. PMID: 39492705
6. ACC/AHA. 2014 ACC/AHA Guideline on Perioperative Cardiovascular Evaluation and Management. 2014.
7. American College of Surgeons. ACS NSQIP Surgical Risk Calculator. 2024.

# Safe Discharge Planning Principles

## Clinical Setup
A 70-year-old woman with heart failure and diabetes is recovering from pneumonia and is ready for discharge. She lives alone and her daughter works full-time. What steps are necessary to ensure a safe transition home?

## Teaching Objectives
- Identify key components of comprehensive discharge planning
- Incorporate social determinants and medication reconciliation into discharge practices

## Teaching Points
1. Initiate discharge planning at admission by assessing medical stability, cognitive function, mobility, home environment and caregiver support. Engage an interprofessional team-case managers, social workers, physical and occupational therapists-to identify needs and arrange home services, durable medical equipment and transportation [Ref 1, Ref 4].
2. Perform meticulous medication reconciliation using validated tools (e.g., MARQUIS) to compare pre-admission medications with in-hospital prescriptions. Address duplications, omissions and potential interactions. Provide patients with an updated medication list and clear verbal and written instructions [Ref 2].
3. Evaluate social determinants of health such as financial constraints, health literacy, food security and access to care. Connect patients to community resources, home health, Meals on Wheels or transportation services, and involve family or caregivers in education sessions [Ref 1].
4. Schedule follow-up appointments before discharge and ensure they are within appropriate timeframes (e.g., within 7 days for heart failure). Use teach-back to confirm understanding of discharge instructions including symptom monitoring, wound care and emergency contacts [Ref 3].
5. Implement structured discharge programs such as the AHRQ Project RED or transitional care protocols. These programs standardize education, medication reconciliation and follow-up communication and have been shown to reduce 30-day readmissions and improve patient satisfaction [Ref 4, Ref 5].

## Key Numbers
- Approximately 20 % of Medicare beneficiaries are readmitted within 30 days; comprehensive discharge programs can reduce readmissions by about 20 % [Ref 4].
- Medication discrepancies are found in up to 60 % of discharge medication lists; systematic reconciliation significantly lowers adverse drug events [Ref 2].
- Early follow-up for heart failure (within 7 days) decreases 30-day readmissions by approximately 2-3 % [Ref 3].

## Teaching Pearl
Involving caregivers in discharge planning and using the teach-back method ensures comprehension, enhances adherence and reduces readmissions. Provide written instructions in plain language and encourage questions [Ref 1].

## Boards + Bedside Tie-In
Board questions highlight medication reconciliation and the impact of social determinants on readmissions. At the bedside, beginning discharge planning early and coordinating with an interprofessional team help ensure safe transitions. Clear documentation of the plan and communication with outpatient providers support continuity of care.

## References
1. Hudson T. The Role of Social Determinates of Health in Discharge Practices. Nurs Clin North Am. 2021;56(3):319-329. PMID: 34366157
2. Xiao S, Tourangeau A, Reay T, et al. Discharge planning in mental healthcare settings: A review and concept analysis. Int J Ment Health Nurs. 2019;28(5):1059-1072. PMID: 31039293
3. Rajesh A, Kovacik R, Luther S, et al. A comprehensive review of inpatient heart failure management for the hospitalist. Postgrad Med. 2025;137(4):454-467. PMID: 40332986
4. Aguilera C, Wong G, Wadhwa R, et al. Patient outcomes after implementation of transitional care protocols in elective neurosurgery. Neurosurg Rev. 2024;47(3):455-465. PMID: 39060496
5. Rameli PM, Rajendran N. Outcomes of complex discharge planning in older adults with complex needs. J Int Med Res. 2022;50(8):3000605211121140. PMID: 35903858
6. Anderson N, Narvey M. Discharge planning of the preterm infant. Paediatr Child Health. 2022;27(4):222-228. PMID: 35599674
7. Kotronias RA, Teitelbaum M, Fan SC, et al. Early Versus Standard Discharge After Transcatheter Aortic Valve Replacement. JACC Cardiovasc Interv. 2018;11(12):1124-1134. PMID: 30190065
8. Agency for Healthcare Research and Quality. Project RED (Re-Engineered Discharge) Toolkit. 2023.
9. Society of Hospital Medicine. MARQUIS Toolkit for Medication Reconciliation. 2021.`;

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
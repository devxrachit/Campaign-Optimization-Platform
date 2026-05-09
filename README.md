# 📊 Social Media Campaign Analytics — MetricFlow

![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat-square&logo=python)
![Power BI](https://img.shields.io/badge/Power_BI-DAX-yellow?style=flat-square)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-ML-orange?style=flat-square&logo=scikitlearn)
![Excel](https://img.shields.io/badge/Excel-Analysis-green?style=flat-square&logo=microsoftexcel)
![Status](https://img.shields.io/badge/Stage-Complete-green?style=flat-square)

---

🌐 **Live Demo:** [forecast-x-frontend-vz8c.vercel.app](https://forecast-x-frontend-vz8c.vercel.app/)
📦 **Dataset:** [Marketing Campaign Performance — Kaggle](https://www.kaggle.com/datasets/manishabhatt22/marketing-campaign-performance-dataset)
👤 **Author:** [Ashutosh — GitHub](https://github.com/Ashutosh-AIBOT) · [LinkedIn](https://www.linkedin.com/in/ashutosh1975271/)
💼 **Portfolio:** [ashutosh-portfolio-kappa.vercel.app](https://ashutosh-portfolio-kappa.vercel.app/)


---

## 📋 Table of Contents

- [What This Does](#-what-this-does)
- [Real Numbers](#-real-numbers)
- [Dataset](#-dataset)
- [Architecture](#-architecture)
- [What I Built](#-what-i-built)
- [Key Metrics Explained](#-key-metrics-explained)
- [Quick Start](#-quick-start)
- [Tech Stack](#-tech-stack)
- [Project Status](#-project-status)
- [Links](#-links)
- [Author](#-author)

---

## 🧠 What This Does

End-to-end marketing analytics pipeline on real
multi-platform ad campaign performance data covering
Facebook, Instagram, Google, LinkedIn, and Twitter.

1. **Problem** — Marketing team has no unified view of
   ad performance across platforms — no way to compare
   ROAS, CTR, or ROI across channels in one place
2. **Solution** — Full analytics pipeline from raw campaign
   data → EDA → A/B testing → audience segmentation →
   cross-platform Power BI dashboard
3. **For** — Data Analyst / Marketing Analyst / BI Analyst
   hiring managers looking for real campaign analytics proof

---

## 📊 Real Numbers

| Metric | Value |
|--------|-------|
| Platforms Covered | Facebook, Instagram, Google, LinkedIn, Twitter |
| Key KPIs Tracked | CTR, CPC, CPM, ROAS, ROI, Conversions |
| Analysis Types | EDA, A/B Testing, Segmentation, Attribution |
| ML Applied | KMeans Audience Segmentation, CTR Prediction |
| Dashboard | Power BI with DAX measures |
| Excel Analysis | Pivot tables + slicers |

---

## 🔢 Dataset

| Field | Detail |
|-------|--------|
| Source | [Marketing Campaign Performance — Kaggle](https://www.kaggle.com/datasets/manishabhatt22/marketing-campaign-performance-dataset) |
| Platforms | Facebook, Instagram, Google, LinkedIn, Twitter |
| Features | Campaign Type, Platform, Spend, Impressions, Clicks, Conversions, CTR, CPC, CPM, ROAS, ROI |
| Use Case | Multi-channel attribution, budget optimization, audience targeting |

---

## 🏗️ Architecture
```
Raw Campaign CSV (Multi-platform)
        ↓
Data Cleaning
  → Handle nulls and duplicates
  → Standardize platform and campaign names
  → Fix data types for spend and date columns
        ↓
EDA
  → CTR by platform comparison
  → ROAS by campaign type
  → Spend vs conversion scatter
  → ROI distribution across channels
  → CPM and CPC trends over time
        ↓
A/B Testing
  → Ad creative performance comparison
  → Statistical significance testing
  → Winning variant identification
        ↓
Audience Segmentation (KMeans)
  → High ROAS segments
  → Low CTR at-risk segments
  → Budget efficiency clusters
        ↓
CTR Prediction Model
  → Logistic Regression baseline
  → Feature importance analysis
        ↓
Cross-Platform Attribution
  → First-touch vs last-touch
  → Revenue attribution by channel
        ↓
Power BI Executive Dashboard
  → Platform comparison KPI cards
  → ROAS and ROI by campaign
  → Budget allocation recommendations
        ↓
Excel Dashboard
  → Pivot tables + slicers
  → KPI summary sheet
```

---

## 🔨 What I Built

### 1. Data Cleaning
- Loaded multi-platform campaign performance data
- Handled missing values in spend and conversion columns
- Standardized platform names and campaign type labels
- Fixed date formats for time-series analysis
- Removed duplicate campaign entries

### 2. EDA — Full Campaign Analysis
- CTR comparison across all 5 platforms
- ROAS breakdown by campaign type and platform
- Spend efficiency: revenue generated per ₹1 spent
- Conversion funnel: Impressions → Clicks → Conversions
- CPC and CPM trend analysis over time
- Top performing campaigns by ROI

### 3. A/B Testing
- Compared ad creative variants for statistical significance
- Used two-sample t-test for CTR and conversion rate
- Identified winning ad variants per platform
- Quantified uplift from better-performing creatives

### 4. Audience Segmentation (KMeans)
- Clustered campaigns into performance tiers
- High ROAS / High CTR segment — scale budget here
- Low ROAS / High Spend segment — cut or optimize
- Medium performance segment — A/B test candidates

### 5. CTR Prediction
- Features: platform, campaign type, spend, impressions, CPM
- Logistic Regression for binary CTR above/below median
- Feature importance: which factors drive click-through

### 6. Power BI Dashboard
- Platform-level KPI cards (CTR, ROAS, ROI, CPC, CPM)
- Campaign type performance comparison bar charts
- Spend vs ROAS scatter with platform color coding
- Budget allocation recommendation visuals
- Time-series trend for weekly campaign performance
- All DAX measures for calculated KPIs

### 7. Excel Analysis
- Pivot tables for platform × campaign type breakdown
- Slicers for date range, platform, and campaign type
- KPI summary sheet with conditional formatting

---

## 📐 Key Metrics Explained

| Metric | Formula | What It Tells You |
|--------|---------|------------------|
| CTR | Clicks / Impressions × 100 | Ad relevance and engagement |
| CPC | Spend / Clicks | Cost efficiency per click |
| CPM | Spend / Impressions × 1000 | Cost to reach 1,000 people |
| ROAS | Revenue / Ad Spend | Revenue generated per ₹1 spent |
| ROI | (Revenue - Spend) / Spend × 100 | Profit percentage on ad spend |
| Conversion Rate | Conversions / Clicks × 100 | Quality of traffic driven |

---

## ⚡ Quick Start

**Prerequisites:** Python 3.11+, Git
```bash
# 1. Clone the repo
git clone https://github.com/Ashutosh-AIBOT/social-media-campaign-analytics.git
cd social-media-campaign-analytics

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Download dataset from Kaggle
# https://www.kaggle.com/datasets/manishabhatt22/marketing-campaign-performance-dataset
# Place CSV in data/raw/

# 5. Run notebooks in order
jupyter notebook notebooks/

# Notebook order:
# 01_data_cleaning.ipynb
# 02_eda.ipynb
# 03_ab_testing.ipynb
# 04_audience_segmentation.ipynb
# 05_ctr_prediction.ipynb
# 06_attribution.ipynb
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Python 3.11 | Core language |
| Pandas + NumPy | Data cleaning and manipulation |
| Matplotlib + Seaborn | Static EDA charts |
| Plotly | Interactive visualizations |
| Scikit-learn | KMeans segmentation, CTR prediction |
| Statsmodels | A/B test significance testing |
| Power BI (DAX) | Cross-platform BI dashboard |
| Microsoft Excel | Pivot tables + KPI summary |
| Git | Version control |

---

## 📁 Folder Structure
```
Social-Media-Ads-Analysis/
│
├── notebooks/
│   ├── pipeline_1.py        # Load & clean raw data
│   ├── pipeline_2.py        # Exploratory data analysis
│   ├── pipeline_3.py        # Business insights
│   ├── pipeline_4.py        # Statistical testing
│   ├── pipeline_5.py        # Feature engineering
│   ├── pipeline_6.py        # Model building (with leakage check)
│   ├── pipeline_6b.py       # Model building (clean, no leakage)
│   ├── pipeline_7.py        # XGBoost + AdaBoost
│   ├── pipeline_8.py        # Static matplotlib charts (14 PNGs)
│   ├── pipeline_9.py        # Interactive Plotly dashboards (4 HTML)
│   └── pipeline_10.py       # Master runner — one line runs everything             - Here All in one Single FIle So you Can Run Easily .
│
├── charts/
│   ├── p8_01_kpi_summary.png
│   ├── p8_02_channel.png
│   ├── p8_03_pinterest.png
│   ├── p8_04_monthly.png
│   ├── p8_05_audience.png
│   ├── p8_06_campaign_goal.png
│   ├── p8_07_segment.png
│   ├── p8_08_correlation.png
│   ├── p8_09_roc_curves.png
│   ├── p8_10_model_comparison.png
│   ├── p8_11_feature_importance.png
│   ├── p8_12_confusion.png
│   ├── p8_13_duration.png
│   └── p8_14_location.png
│
├── social-ads-dashboard/    # React web dashboard
│   ├── src/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## 📊 Project Status

| Deliverable | Status |
|-------------|--------|
| Data Cleaning | ✅ Complete |
| EDA | ✅ Complete |
| A/B Testing | ✅ Complete |
| Audience Segmentation | ✅ Complete |
| CTR Prediction | ✅ Complete |
| Cross-Platform Attribution | ✅ Complete |
| Power BI Dashboard | ✅ Complete |
| Excel Dashboard | ✅ Complete |

---
## 🌐 Links

| Resource | URL |
|----------|-----|
| 🚀 Live Demo | [forecast-x-frontend-vz8c.vercel.app](https://forecast-x-frontend-vz8c.vercel.app/) |
| 📦 Dataset | [Marketing Campaign Performance — Kaggle](https://www.kaggle.com/datasets/manishabhatt22/marketing-campaign-performance-dataset) |
| 💼 Portfolio | [ashutosh-portfolio-kappa.vercel.app](https://ashutosh-portfolio-kappa.vercel.app/) |
| 🐙 GitHub | [github.com/Ashutosh-AIBOT](https://github.com/Ashutosh-AIBOT) |
| 🔗 LinkedIn | [linkedin.com/in/ashutosh1975271](https://www.linkedin.com/in/ashutosh1975271/) |
---

## 👤 Author

**Ashutosh**
B.Tech Electronics Engineering · CGPA 7.5 · Batch 2026
[GitHub](https://github.com/Ashutosh-AIBOT) · [LinkedIn](https://www.linkedin.com/in/ashutosh1975271/) · [Portfolio](https://ashutosh-portfolio-kappa.vercel.app/)

---

> *"5 platforms. Every rupee tracked.*
> *This is what real marketing analytics looks like."*
>
> — Ashutosh, building this from zero.
```

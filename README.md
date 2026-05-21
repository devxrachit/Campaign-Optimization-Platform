# Social Media Campaign Analytics — MetricFlow

![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat-square&logo=python)
![Power BI](https://img.shields.io/badge/Power_BI-DAX-yellow?style=flat-square)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-ML-orange?style=flat-square&logo=scikitlearn)
![Excel](https://img.shields.io/badge/Excel-Analysis-green?style=flat-square&logo=microsoftexcel)
![Status](https://img.shields.io/badge/Stage-Complete-green?style=flat-square)

---

## Table of Contents

- [What This Does](#what-this-does)
- [Real Numbers](#real-numbers)
- [Dataset](#dataset)
- [Architecture](#architecture)
- [What I Built](#what-i-built)
- [Key Metrics](#key-metrics)
- [Quick Start](#quick-start)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Project Status](#project-status)

---

## What This Does

End-to-end marketing analytics pipeline on real multi-platform ad campaign performance data covering Facebook, Instagram, Google, LinkedIn, and Twitter.

1. **Problem** — Marketing team has no unified view of ad performance across platforms — no way to compare ROAS, CTR, or ROI across channels in one place
2. **Solution** — Full analytics pipeline from raw campaign data → EDA → A/B testing → audience segmentation → interactive Plotly dashboards
3. **For** — Data Analyst / Marketing Analyst / BI Analyst hiring managers looking for real campaign analytics proof

---

## Real Numbers

| Metric | Value |
|--------|-------|
| Platforms Covered | Facebook, Instagram, Google, LinkedIn, Twitter |
| Key KPIs Tracked | CTR, CPC, CPM, ROAS, ROI, Conversions |
| Analysis Types | EDA, A/B Testing, Segmentation, Attribution |
| ML Applied | KMeans Audience Segmentation, CTR Prediction |
| Static Charts | 14 Matplotlib/Seaborn PNGs |
| Interactive Dashboards | 4 Plotly HTML dashboards |

---

## Dataset

| Field | Detail |
|-------|--------|
| Source | Marketing Campaign Performance — Kaggle |
| Platforms | Facebook, Instagram, Google, LinkedIn, Twitter |
| Features | Campaign Type, Platform, Spend, Impressions, Clicks, Conversions, CTR, CPC, CPM, ROAS, ROI |
| Use Case | Multi-channel attribution, budget optimization, audience targeting |

---

## Architecture

```
Raw Campaign CSV (Multi-platform)
        ↓
p1 — Data Cleaning
  → Handle nulls and duplicates
  → Standardize platform and campaign names
  → Fix data types for spend and date columns
        ↓
p2 — EDA
  → CTR by platform comparison
  → ROAS by campaign type
  → Spend vs conversion scatter
  → ROI distribution across channels
        ↓
p3 — Business Insights
  → KPI calculations
  → Best performers by channel, goal, segment
        ↓
p4 — Statistical Testing
  → T-tests, ANOVA, Chi-square
  → Correlation and normality tests
        ↓
p5 — Feature Engineering
  → ROI/engagement/spend categories
  → Label encoding, interaction features
        ↓
p6/p6b — Model Building
  → Logistic Regression, Random Forest, Gradient Boosting
  → Leakage check (p6 vs p6b clean version)
        ↓
p7 — Boosting Models
  → XGBoost + AdaBoost with feature importance
        ↓
p8 — Static Charts (14 PNGs)
  → Matplotlib + Seaborn visualizations
        ↓
p9 — Interactive Dashboards (4 HTML files)
  → Plotly dashboards for Money, Pinterest, Customers, Models
        ↓
p10 — Master Runner
  → One call runs the entire pipeline
```

---

## What I Built

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

### 3. Statistical Testing (A/B)
- Two-sample t-tests for CTR and conversion rate
- ANOVA across campaign goals
- Chi-square for categorical associations
- Identified winning variants with statistical significance

### 4. Audience Segmentation (KMeans)
- Clustered campaigns into performance tiers
- High ROAS / High CTR segment — scale budget here
- Low ROAS / High Spend segment — cut or optimize

### 5. CTR Prediction
- Features: platform, campaign type, spend, impressions, CPM
- Logistic Regression, Random Forest, Gradient Boosting, XGBoost, AdaBoost
- Feature importance analysis

### 6. Interactive Dashboards
- `p9_01_money_dashboard.html` — Revenue and spend analysis
- `p9_02_pinterest_dashboard.html` — Pinterest-specific metrics
- `p9_03_customers_dashboard.html` — Audience segmentation view
- `p9_04_models_dashboard.html` — ML model comparison

### 7. Excel Analysis
- Pivot tables for platform × campaign type breakdown
- KPI summary sheet with conditional formatting

---

## Key Metrics

| Metric | Formula | What It Tells You |
|--------|---------|------------------|
| CTR | Clicks / Impressions × 100 | Ad relevance and engagement |
| CPC | Spend / Clicks | Cost efficiency per click |
| CPM | Spend / Impressions × 1000 | Cost to reach 1,000 people |
| ROAS | Revenue / Ad Spend | Revenue generated per ₹1 spent |
| ROI | (Revenue - Spend) / Spend × 100 | Profit percentage on ad spend |
| Conversion Rate | Conversions / Clicks × 100 | Quality of traffic driven |

---

## Quick Start

**Prerequisites:** Python 3.11+, Git

```bash
# 1. Clone the repo
git clone https://github.com/devxrachit/Campaign-Optimization-Platform.git
cd Campaign-Optimization-Platform

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate        # Mac/Linux
venv\Scripts\activate           # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Download dataset from Kaggle
# https://www.kaggle.com/datasets/manishabhatt22/marketing-campaign-performance-dataset
# Rename the file to: Social_Media_Advertising.csv
# Place it in the data/ folder

# 5. Launch Jupyter and open the notebook
jupyter notebook notebook/Social-ads-pipeline-mergefile.ipynb

# Run all cells top to bottom — or use the p10 Master Runner cell at the bottom
# to execute the full pipeline in one shot
```

**To view dashboards without running the notebook:**
Open any of the HTML files directly in your browser:
- `p9_01_money_dashboard.html`
- `p9_02_pinterest_dashboard.html`
- `p9_03_customers_dashboard.html`
- `p9_04_models_dashboard.html`

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Python 3.11 | Core language |
| Pandas + NumPy | Data cleaning and manipulation |
| Matplotlib + Seaborn | Static EDA charts (14 PNGs) |
| Plotly | Interactive dashboards (4 HTML files) |
| Scikit-learn | KMeans segmentation, CTR prediction |
| XGBoost + AdaBoost | Boosting model comparison |
| Scipy | Statistical testing (t-test, ANOVA, chi-square) |
| Microsoft Excel | Pivot tables + KPI summary |
| Git | Version control |

---

## Folder Structure

```
Campaign-Optimization-Platform/
│
├── notebook/
│   └── Social-ads-pipeline-mergefile.ipynb   # Full pipeline (all stages merged)
│
├── Matplot-charts/                            # 14 static PNG charts
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
├── p9_01_money_dashboard.html                 # Interactive Plotly dashboard
├── p9_02_pinterest_dashboard.html
├── p9_03_customers_dashboard.html
├── p9_04_models_dashboard.html
│
├── data/                                      # Place Social_Media_Advertising.csv here
├── All Csv Files/                             # Intermediate pipeline CSVs (gitignored)
│
├── SocialMedia_Campaign_Analytics.xlsx        # Excel analysis workbook
├── SocialMedia_Campaign_Analytics_Docs.docx   # Project documentation
├── requirements.txt                           # Python dependencies
└── README.md
```

---

## Project Status

| Deliverable | Status |
|-------------|--------|
| Data Cleaning | Complete |
| EDA | Complete |
| Statistical Testing | Complete |
| Feature Engineering | Complete |
| ML Models (LR, RF, GB, XGBoost, AdaBoost) | Complete |
| Static Charts (14 PNGs) | Complete |
| Interactive Plotly Dashboards | Complete |
| Excel Dashboard | Complete |

---

> *"5 platforms. Every rupee tracked. This is what real marketing analytics looks like."*

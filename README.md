<div align="center">

<img src="Matplot-charts/p8_01_kpi_summary.png" alt="MetricFlow — Executive KPI Dashboard" width="820"/>

<br/>

# MetricFlow — Social Media Campaign Analytics

**End-to-end ML pipeline analyzing 200,000 ad campaigns across 6 channels — from raw CSV to predictive intelligence.**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-6366f1?style=for-the-badge)](https://ui-tawny-alpha.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-devxrachit-181717?style=for-the-badge&logo=github)](https://github.com/devxrachit/Campaign-Optimization-Platform)

<br/>

![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-2.0-150458?style=flat-square&logo=pandas&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-1.3-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)
![XGBoost](https://img.shields.io/badge/XGBoost-1.7-FF6600?style=flat-square)
![Plotly](https://img.shields.io/badge/Plotly-5.14-3F4F75?style=flat-square&logo=plotly&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)
![Status](https://img.shields.io/badge/Pipeline-Complete-22c55e?style=flat-square)

</div>

---

## Overview

MarketPulse ingests **200,000 social media ad campaigns** spanning 6 channels (Email, Facebook, Google Ads, Instagram, Website, YouTube), runs them through a 10-stage ML pipeline, and surfaces insights via 14 static charts, 4 interactive Plotly dashboards, and a live React web app.

| | |
|---|---|
| **Dataset** | 200,000 campaigns · 16 raw features → 24+ engineered |
| **Revenue analyzed** | $12.52B total across all channels |
| **ML models** | 5 classifiers benchmarked (best: XGBoost 87.3% accuracy) |
| **Dashboards** | 4 interactive Plotly HTML dashboards |
| **Charts** | 14 Matplotlib/Seaborn static visualizations |
| **UI** | React 18 + Tailwind CSS · deployed on Vercel |

---

## Live Demo

> **[https://ui-tawny-alpha.vercel.app](https://ui-tawny-alpha.vercel.app)**

The React UI showcases every output of the pipeline — KPI cards, animated bar charts, a filterable chart gallery with modal zoom, ML model scorecards, and links to the 4 live Plotly dashboards.

---

## Pipeline Architecture

```
Social_Media_Advertising.csv  (200,000 rows)
          │
          ▼
  ┌───────────────┐
  │  P1 — Clean   │  Fix Duration format · parse Acquisition_Cost
  │               │  Derive CTR, CPC, CPM, Revenue, Profit, ROI
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │  P2–P4 — EDA  │  Channel KPIs · Audience Segments · A/B tests
  │  & Stats      │  T-tests · ANOVA · Pearson correlation matrix
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │  P5 — Feature │  Label encoding · StandardScaler
  │  Engineering  │  Interaction features: CTR×Conversion, ROI×Engagement
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │  P6/P6b — ML  │  Logistic Regression · Random Forest
  │  Baseline     │  Gradient Boosting · 5-fold CV · leakage-free split
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │  P7 — Boost   │  XGBoost · AdaBoost · Feature Importance
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │  P8 — Charts  │  14 Matplotlib/Seaborn PNGs
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │ P9 — Dashboards│ 4 Plotly interactive HTML dashboards
  └──────┬────────┘
         │
  ┌──────▼────────┐
  │ P10 — Master  │  Single call executes the full pipeline end-to-end
  └───────────────┘
```

---

## ML Model Results

| Model | Accuracy | Precision | Recall | F1 | AUC-ROC |
|-------|----------|-----------|--------|----|---------|
| **XGBoost** ⭐ | **87.3%** | **86.9%** | **87.8%** | **87.3%** | **0.94** |
| Gradient Boosting | 86.1% | 85.7% | 86.5% | 86.1% | 0.93 |
| Random Forest | 84.6% | 84.2% | 85.1% | 84.6% | 0.92 |
| AdaBoost | 81.4% | 80.9% | 81.8% | 81.3% | 0.89 |
| Logistic Regression | 76.2% | 75.8% | 76.7% | 76.2% | 0.84 |

Target: **high-ROI campaign classification** (binary). 80K sample · 5-fold stratified CV · no data leakage.

---

## Channel Performance

| Channel | Revenue | ROI | CTR |
|---------|---------|-----|-----|
| Facebook | $2.10B | 5.02x | 14.05% |
| Email | $2.10B | 5.00x | 14.05% |
| Google Ads | $2.10B | 5.00x | 13.92% |
| Website | $2.09B | 5.01x | 14.10% |
| YouTube | $2.08B | 4.99x | 14.12% |
| Instagram | $2.08B | 4.99x | 14.00% |

---

## Interactive Dashboards

| Dashboard | Description |
|-----------|-------------|
| [Revenue & ROI](p9_01_money_dashboard.html) | Revenue by channel, goal, duration, location |
| [Platform Insights](p9_02_pinterest_dashboard.html) | CTR vs spend heatmaps across all channels |
| [Audience Segments](p9_03_customers_dashboard.html) | Segment KPIs, demographic breakdown, location ROI |
| [ML Models](p9_04_models_dashboard.html) | ROC curves, confusion matrix, feature importance |

---

## Quick Start

**Requirements:** Python 3.11+ · Git · Kaggle account

```bash
# 1. Clone
git clone https://github.com/devxrachit/Campaign-Optimization-Platform.git
cd Campaign-Optimization-Platform

# 2. Install dependencies
pip install -r requirements.txt

# 3. Download dataset from Kaggle
#    Search: "Marketing Campaign Performance Dataset" by manishabhatt22
#    Rename the file → Social_Media_Advertising.csv
#    Place it in:  data/Social_Media_Advertising.csv

# 4. Run the notebook
jupyter notebook notebook/Social-ads-pipeline-mergefile.ipynb
# → Run all cells, or scroll to the P10 cell and run it once to execute
#   the full pipeline end-to-end automatically

# 5. View dashboards (no notebook needed)
#    Open any HTML file directly in your browser:
#    p9_01_money_dashboard.html
#    p9_03_customers_dashboard.html
#    p9_04_models_dashboard.html
```

**To run the UI locally:**

```bash
cd ui
npm install
npm run dev        # → http://localhost:5173
```

---

## Folder Structure

```
Campaign-Optimization-Platform/
│
├── notebook/
│   └── Social-ads-pipeline-mergefile.ipynb   # Full 10-stage pipeline
│
├── Matplot-charts/                            # 14 static PNG charts (p8)
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
├── p9_01_money_dashboard.html                 # Interactive Plotly dashboards
├── p9_02_pinterest_dashboard.html
├── p9_03_customers_dashboard.html
├── p9_04_models_dashboard.html
│
├── ui/                                        # React web app (Vite + Tailwind)
│   ├── src/
│   │   ├── components/                        # 8 page sections
│   │   └── App.jsx
│   ├── public/charts/                         # Chart PNGs served statically
│   └── vercel.json
│
├── data/                                      # Place Social_Media_Advertising.csv here
├── All Csv Files/                             # Intermediate CSVs (gitignored)
├── requirements.txt
└── README.md
```

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| Language | Python 3.11 |
| Data | Pandas 2.0, NumPy |
| Stats | SciPy (t-test, ANOVA, chi-square) |
| ML | Scikit-learn, XGBoost, AdaBoost |
| Visualization | Matplotlib, Seaborn, Plotly |
| UI | React 18, Vite 5, Tailwind CSS, Lucide |
| Deployment | Vercel |
| Runtime | Jupyter Notebook |

---

## Deployment

The React UI is deployed on Vercel and rebuilds automatically on every push to `main`.

**Deploy your own fork:**
1. Fork this repo on GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your fork
3. Set **Root Directory** → `ui`
4. Leave Build Command and Output Directory as auto-detected
5. Click Deploy

---

<div align="center">

Made by [devxrachit](https://github.com/devxrachit) · [Live Demo](https://ui-tawny-alpha.vercel.app) · [View on GitHub](https://github.com/devxrachit/Campaign-Optimization-Platform)

</div>

import type {
  AmbientBandIntensity,
  AmbientBandReviewStatus,
  AmbientBandSection,
  AmbientBandVariant,
} from "../lib/visual/ambient-band";

export type AmbientBandPreview = {
  section: AmbientBandSection;
  variant: AmbientBandVariant;
  seed: string;
  maxWidth: number;
  intensity: AmbientBandIntensity;
  status: AmbientBandReviewStatus;
  note: string;
};

export const ambientBandSections: {
  section: AmbientBandSection;
  label: string;
  description: string;
}[] = [
  {
    section: "projects",
    label: "Projects",
    description: "石青与黛蓝承担结构，朱红只落在少量峰值像素。",
  },
  {
    section: "notes",
    label: "Notes",
    description: "暖纸与青灰托底，朱红作为记录节点，不铺满整条色带。",
  },
  {
    section: "archive",
    label: "Archive",
    description: "月白与石绿形成时间存档感，琥珀只标记少量节点。",
  },
  {
    section: "lab",
    label: "Lab",
    description: "淡灰紫与青灰绿构成实验折面，紫色保持局部识别。",
  },
];
export const ambientBandPreviews: AmbientBandPreview[] = [
  {
    section: "projects",
    variant: "diagonal-up",
    seed: "projects-ascent-01",
    maxWidth: 820,
    intensity: "medium",
    status: "candidate",
    note: "主走势明确，适合从左侧空白区进入。",
  },
  {
    section: "projects",
    variant: "diagonal-down",
    seed: "projects-descent-02",
    maxWidth: 760,
    intensity: "low",
    status: "candidate",
    note: "适合右侧内容较轻的详情页背景。",
  },
  {
    section: "projects",
    variant: "right-sweep",
    seed: "projects-sweep-03",
    maxWidth: 720,
    intensity: "medium",
    status: "rejected",
    note: "右缘重量偏高，保留用于对照折角失败模式。",
  },
  {
    section: "projects",
    variant: "low-cross",
    seed: "projects-low-04",
    maxWidth: 860,
    intensity: "medium",
    status: "candidate",
    note: "下部横穿稳定，适合避开标题与正文主列。",
  },
  {
    section: "notes",
    variant: "diagonal-up",
    seed: "notes-reading-01",
    maxWidth: 820,
    intensity: "medium",
    status: "candidate",
    note: "暖纸托底清晰，红色节点占比克制。",
  },
  {
    section: "notes",
    variant: "diagonal-down",
    seed: "notes-margin-02",
    maxWidth: 740,
    intensity: "low",
    status: "candidate",
    note: "适合从目录远背景进入并向右侧淡出。",
  },
  {
    section: "notes",
    variant: "right-sweep",
    seed: "notes-corner-03",
    maxWidth: 680,
    intensity: "low",
    status: "rejected",
    note: "仍接近上一轮右侧折角，暂不进入真实页面。",
  },
  {
    section: "notes",
    variant: "low-cross",
    seed: "notes-footer-04",
    maxWidth: 840,
    intensity: "medium",
    status: "candidate",
    note: "可放在文章低风险区，文字安全区完整。",
  },
  {
    section: "archive",
    variant: "diagonal-up",
    seed: "archive-rise-01",
    maxWidth: 780,
    intensity: "medium",
    status: "candidate",
    note: "石绿层级清楚，适合作为未来存档详情参考。",
  },
  {
    section: "archive",
    variant: "diagonal-down",
    seed: "archive-track-02",
    maxWidth: 760,
    intensity: "medium",
    status: "rejected",
    note: "斜向节点可能与时间轴方向竞争，保留对照。",
  },
  {
    section: "archive",
    variant: "right-sweep",
    seed: "archive-point-03",
    maxWidth: 720,
    intensity: "low",
    status: "candidate",
    note: "侧向切入较轻，可作为非时间轴页面参考。",
  },
  {
    section: "archive",
    variant: "low-cross",
    seed: "archive-base-04",
    maxWidth: 860,
    intensity: "medium",
    status: "candidate",
    note: "最接近存档轨道语义，琥珀峰值保持稀少。",
  },
  {
    section: "lab",
    variant: "diagonal-up",
    seed: "lab-spectrum-01",
    maxWidth: 820,
    intensity: "medium",
    status: "candidate",
    note: "几何感最强，适合实验详情的远背景。",
  },
  {
    section: "lab",
    variant: "diagonal-down",
    seed: "lab-probe-02",
    maxWidth: 780,
    intensity: "medium",
    status: "candidate",
    note: "紫色折面和青灰中和比例稳定。",
  },
  {
    section: "lab",
    variant: "right-sweep",
    seed: "lab-edge-03",
    maxWidth: 720,
    intensity: "medium",
    status: "rejected",
    note: "实验感足够，但右侧密度仍偏集中。",
  },
  {
    section: "lab",
    variant: "low-cross",
    seed: "lab-field-04",
    maxWidth: 860,
    intensity: "medium",
    status: "candidate",
    note: "宽幅像素折带完整，适合内容下方的留白区域。",
  },
];

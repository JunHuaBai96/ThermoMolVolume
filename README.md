## ThermoMolVolume · 摩尔体积温度外推计算器

一个基于 **0 K 体积 + 线膨胀系数** 的轻量级网页工具，用来估算任意温度下的摩尔体积 $V_m(T)$，并可选给出 **$\alpha_L$ 不确定性区间** 和 **Debye–Grüneisen 修正**。  
只需浏览器即可运行，无需安装额外软件。

<img width="1251" height="834" alt="image" src="https://github.com/user-attachments/assets/20880c79-8bc2-4763-b341-24e4b73bf5f0" />

---

### 功能特性 Features

- **内建材料数据库**  
  - Mg (hcp/fcc)、Al (fcc)、Cu (fcc)、Ni (fcc)、Zn (hcp/fcc) 等的近似热力学参数  
  - 一键选择材料自动填入 $V_0$、 $\alpha_L$ 、$\theta_D$、γ、B 等

- **0 K 摩尔体积计算**  
  - 直接输入 0 K 摩尔体积 $V_0$（cm³/mol），或  
  - 输入晶胞体积$V_{\text{cell}}$ (Å³) 和晶胞原子数 $N_{\text{cell}}$，用公式自动换算：
  $$V_0 = \frac{V_{\text{cell}} \times N_A}{N_{\text{cell}}}\times 10^{-24} \ \text{cm}^3/\text{mol}$$

- **常数热膨胀系数外推 $V_m(T)$**  
  - 使用：
$$
V_m(T) \approx V_0 \bigl[ 1 + \alpha_V (T-0) \bigr],\quad \alpha_V \approx 3\alpha_L
$$
  - 输出方法 A：**常数热膨胀系数外推** 的摩尔体积

- **不确定性区间（$\alpha_L$ 上下界）**  
  - 支持输入$\alpha_L$ 的下界与上界（例如 20–30×10⁻⁶ K⁻¹）  
  - 自动给出对应的 $V_m(T)$ **区间范围**，方便在报告/论文中给出保守估计

- **Debye–Grüneisen 方法（可选）**  
  - 若给出 $\theta_D$、γ、B，则计算方法 B：**Debye–Grüneisen 模型** 的体积修正，作为对比

- **科研场景友好**  
  - 明确区分：快速估算 vs. 推荐使用 QHA/AIMD 进行高精度验证  
  - 特别标记亚稳相（如 fcc-Mg, fcc-Zn），给出使用提示

---

### 项目结构 Project Structure

- `thermal_volume_calculator.html`  
  主界面与全部计算逻辑（直接用浏览器打开即可使用）。
- `materials_database.js`  
  内建材料数据库，包含各元素/相的 $V_0$、$\alpha_L$、$\theta_D$、γ、B 等近似参数。

---

### 使用方法 How to Use

1. **本地打开**  
   - 克隆仓库或下载 ZIP 解压。  
   - 用浏览器（推荐 Edge / Chrome）双击打开 `thermal_volume_calculator.html`。

2. **选择材料 / 手动输入**  
   - 在“选择材料（内建数据库）”中选择 Mg/Al/Cu/Ni/Zn 等，会自动填入推荐参数；  
   - 或者选择“手动输入”，自己填入所有参数。

3. **设置 0 K 体积**  
   - 直接在 “0 K 摩尔体积 V₀ (cm³/mol)” 输入框中填入，或  
   - 展开“高级：从晶胞体积 Vcell 计算 V₀”，输入：
     - 晶胞体积$V_{\text{cell}}$ (Å³)
     - 晶胞中原子数 $N_{\text{cell}}$  
     - 点击“由 Vcell 计算 V₀”。

4. **设置热膨胀及温度**  
   - 填写线膨胀系数 $\alpha_L$（×10⁻⁶ K⁻¹）；  
   - 可选填入 $\alpha_L$ 下界/上界以获得不确定性区间；  
   - 设置目标温度 T（K）。

5. **可选：Debye–Grüneisen 参数**  
   - 若需要方法 B，对比 Debye–Grüneisen 模型结果，则再填入：
     - Debye 温度 $\theta_D$ (K)  
     - Grüneisen 参数 γ  
     - 体模量 B (GPa)

6. **点击“计算摩尔体积”**  
   - 右侧结果区将显示：
     - 方法 A：常数热膨胀系数外推 $V_m(T)$  
     - 若提供 DG 参数：方法 B：Debye–Grüneisen 的 $V_m(T)$ 
     - 若提供 $\alpha_L$ 上下界：对应的 $V_m(T)$ 区间  
     - 输入/换算得到的 0 K 体积和目标温度 T

---

### 典型应用示例 Example: fcc-Mg

- 从 Materials Project 得到：fcc-Mg，$V_{\text{cell}} = 90.43\ \text{Å}^3$，$N_{\text{cell}} = 4$
- 在高级区输入 Vcell 和 Ncell，点“由 Vcell 计算 V0”，可得：
 - 设 $\alpha_L \approx 26\times10^{-6}\ \text{K}^{-1}$，$T = 298.15\ \text{K}$，外推：  
  $$
  V_0 \approx 13.61\ \text{cm}^3/\text{mol}
  $$
  $$
  V_m(298.15\ \text{K}) \approx 13.9\ \text{cm}^3/\text{mol}
  $$
- 若取 $\alpha_L$ ∈ [20, 30]×10⁻⁶ K⁻¹，可得到对应的体积区间，用于误差估计。

---

### 精度与注意事项 Notes

- 内建参数为文献/经验近似值，**适用于快速估算与趋势分析**。  
- 对亚稳相（如 fcc-Mg, fcc-Zn）尤其建议：  
  - 若用于发表或高精度建模，请使用 **QHA (quasi-harmonic approximation)** 或  
    **AIMD (ab initio molecular dynamics)** 等方法重新评估热膨胀和自由能。  
- 欢迎你根据自己的体系，直接修改 `materials_database.js` 中的参数，以适配你的 DFT / 实验结果。

---

### 贡献与许可 Contributing & License

- 欢迎提交 PR 或 Issue，补充更多材料、相结构或改进界面/模型。  
- 许可证（License）：[MIT License](./LICENSE)。











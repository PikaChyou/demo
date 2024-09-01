<template>
    <div class="profile-container">
      <el-descriptions
        title="客户个人信息"
        direction="vertical"
        border
        class="profile-descriptions"
      >
        <el-descriptions-item
          :rowspan="2"
          :width="140"
          label="Photo"
          align="center"
        >
          <el-image
            class="profile-photo"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </el-descriptions-item>
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </template>
  
  <style scoped>
  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    /* padding: 20px; */
    background: linear-gradient(145deg, #f0f0f0, #ffffff);
    box-sizing: border-box; /* Ensures padding does not affect total width/height */
  }
  
  .profile-descriptions {
    width: 100%;
    max-width: 800px; /* Adjust the max-width to fit the design */
    background: #ffffff;
    border-radius: 12px;
    border: none;
    padding: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    line-height: 2.5;
  }
  
  .profile-photo {
    border-radius: 50%;
    border: 4px solid #ececec;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .el-descriptions-item {
    margin-bottom: 20px;
    padding: 20px 0;
    line-height: 2.4;
  }
  
  .el-descriptions-item label {
    font-weight: 600;
    color: #333;
    font-size: 18px; /* Reduced for better fit */
  }
  
  .el-tag {
    background-color: #007bff;
    color: #fff;
    font-size: 14px;
    border-radius: 12px;
    padding: 5px 10px;
  }
  
  .el-descriptions-item:nth-child(odd) {
    background: #f9f9f9;
    border-radius: 8px;
  }
  
  .el-descriptions-item:nth-child(even) {
    background: #ffffff;
    border-radius: 8px;
  }
  </style>
  
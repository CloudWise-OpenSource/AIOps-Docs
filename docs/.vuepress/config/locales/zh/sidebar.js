module.exports = {
  "/zh/gaia/": [
    {
      title: "Generic AIOps Atlas",
      collapsable: false,
      children: ["", "overview", "dataset-description", "tasks"]
    }
  ],

  "/zh/hours/": [
    {
      title: "Hours",
      collapsable: false,
      children: ["", "getting_started", "error_code"]
    },
    {
      title: "Hours算法服务",
      collapsable: false,
      children: [
        {
          title: "指标异常检测类",
          collapsable: true,
          children: [
            "auto_value",
            "dod_wow",
            "fixed_values",
            "sigma",
            "wave_detection"
          ]
        },
        {
          title: "指标预测类",
          collapsable: true,
          children: ["arima", "holtwinter", "lr"]
        },
        {
          title: "上传csv文件",
          collapsable: true,
          children: ["upload_csv_file"]
        }
      ]
    }
  ],

  "/zh/flyfish/": [
    {
      title: "FlyFish",
      collapsable: false,
      children: [
        {
          title: "快速上手",
          path: "/zh/flyfish/getting-started",
          collapsable: false,
          sidebarDepth: 1,
          children: ["getting-started/", "getting-started/create-project"]
        },
        {
          title: "架构及目录",
          path: "/zh/flyfish/design/design1_0",
          collapsable: false,
          children: [
            {
              title: "1.0版本",
              path: "/zh/flyfish/design/design1_0"
            },
            {
              title: "2.0版本",
              path: "/zh/flyfish/design/design2_0"
            },
            {
              title: "2.1版本",
              path: "/zh/flyfish/design/design2_1"
            },
            {
              title: "2.2版本",
              path: "/zh/flyfish/design/design2_2"
            }
          ]
        },
        {
          title: "贡献者指南",
          path: "/zh/flyfish/contributionGuide",
          collapsable: false
        },
        {
          title: "案例",
          path: "/zh/flyfish/case",
          collapsable: false
        },
        {
          title: "组件基础",
          path: "/zh/flyfish/component/basic",
          collapsable: false,
          children: [
            "component/basic",
            "component/develop",
            "component/related",
            "component/event",
            "component/react",
            "component/upload"
          ]
        },
        {
          title: "进阶",
          path: "/zh/flyfish/advanced/component",
          collapsable: false,
          children: ["advanced/component", "advanced/screen"]
        },
        {
          title: "常见问题解答",
          path: "/zh/flyfish/faq",
          collapsable: false
        },
        {
          title: "版本记录",
          path: "/zh/flyfish/changelog",
          collapsable: false
        },
        {
          title: "内网部署",
          path: "/zh/flyfish/deploy/deploy2_0",
          collapsable: false,
          children: [
            {
              title: "2.0版本",
              path: "/zh/flyfish/deploy/deploy2_0",
              collapsable: false
            },
            {
              title: "2.1版本",
              path: "/zh/flyfish/deploy/deploy2_1",
              collapsable: false
            },
            {
              title: "2.2版本",
              path: "/zh/flyfish/deploy/deploy2_2",
              collapsable: false
            }
          ]
        },
        {
          title: "视频教程",
          path: "/zh/flyfish/video-course/P1",
          collapsable: false,
          children: [
            "video-course/P1",
            "video-course/P2",
            "video-course/P3",
            "video-course/P4",
            "video-course/P5",
            "video-course/P6",
            "video-course/P7"
          ]
        }
        // {
        //   title: '开放API',
        //   path: '/zh/flyfish/api',
        //   collapsable: false,
        // }
      ]
    }
  ],

  "/zh/cwzabbix/": [
    {
      title: "CW-Zabbix",
      collapsable: false,
      children: [
        "start",
        {
          title: "安装要求",
          collapsable: false,
          children: ["require/hard", "require/soft"]
        },
        {
          title: "编译安装",
          collapsable: false,
          children: [
            "install/source",
            "install/database",
            "install/make",
            "install/web",
            "install/config",
            "install/run"
          ]
        },
        {
          title: "性能测试报告",
          children: ["stresstest/"]
        },
        {
          title: "更新日志",
          collapsable: false,
          children: ["changelog"]
        }
      ]
    }
  ],

  "/zh/": [
    {
      title: "介绍",
      collapsable: false,
      children: ["", "releases"]
    },
    {
      title: "基本使用",
      collapsable: false,
      children: [
        "getting_started",
        "manual-file-manger",
        "manual-dev-env",
        "manual-image-manger",
        "manual-service-manger"
      ]
    }
  ]
};

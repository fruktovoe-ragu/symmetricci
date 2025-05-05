export interface IData {
    category: string;
    components: Array<{
        name: string;
        designed: {
            isDone: boolean;
            link: string;
        };
        developed: {
            isDone: boolean;
            link: string;
        };
    }>;
};

export const data: IData[] = [
    {
        category: "Low-level components",
        components: [
            {
                name: "Avatar",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=86-11424",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Badge",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=3405-24933",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Banner",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=86-11425",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Button",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=80-7716",
                },
                developed: {
                    isDone: true,
                    link: "",
                },
            },
            {
                name: "Card",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=86-11426",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Checkbox",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=80-7717",
                },
                developed: {
                    isDone: true,
                    link: "",
                },
            },
            {
                name: "Collapse",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=425-20990",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Divider",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=1688-35425",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Dropdown list",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=305-36063",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Dropdown selector",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=259-22621",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Filter chip",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=80-7722",
                },
                developed: {
                    isDone: true,
                    link: "",
                },
            },
            {
                name: "Link",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=90-21082",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Miscellaneous",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=86-11427",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Overlay",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=6398-68553",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Progress indicator",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=3314-35985",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Progress stepper",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=1574-84013",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Radio button",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=80-7721",
                },
                developed: {
                    isDone: true,
                    link: "",
                },
            },
            {
                name: "Slider",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=1026-17332",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Snackbar & Toast",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=86-11429",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Switch",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=408-12533",
                },
                developed: {
                    isDone: true,
                    link: "",
                },
            },
            {
                name: "Tabs",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=1448-61941",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Table",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=3400-24348",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Tag",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=7615-48372",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Text",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=90-21082",
                },
                developed: {
                    isDone: true,
                    link: "",
                },
            },
            {
                name: "Tooltip",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=80-7719",
                },
                developed: {
                    isDone: true,
                    link: "",
                },
            },
        ],
    },
    {
        category: "High-level components",
        components: [
            {
                name: "Application bar",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=1448-65789",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Filter bar",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=6015-50511",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "File uploader",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=6073-110302",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Modal",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=86-11428",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Pagination",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=1256-16032",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Right overlay panel",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=6012-48377",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Side navigation panel",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=1448-65644",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Status bar",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=1448-65544",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
            {
                name: "Title bar",
                designed: {
                    isDone: true,
                    link: "https://www.figma.com/design/b9wWlRZ1CNvSX8bOPoXiCm/VALO-1.2?node-id=6028-94186",
                },
                developed: {
                    isDone: false,
                    link: "",
                },
            },
        ],
    }
];

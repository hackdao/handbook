import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

// 特色
const features = [
    {
        title: "去中心化",
        imageUrl: "img/crown.svg",
        description: (
            <>
            在加密货币领域，“去中心化”要么是指硬件的物理分布或者政治影响力的扩散方式。这里指的是后者。与传统的等级制权力分布不同，去中心化自治组织的通用方法都是促进点对点协调。这一要素可以被描述为一种多边决策过程。
            </>
        ),
    },
    {
        title: "自治",
        imageUrl: "img/axes.svg",
        description: (
            <>
            “自治”，也就是其自我管理的能力。这种自我管理的能力源于使用智能合约来为任何特定去中心化自治组织制定由代码构建的“游戏规则”。相应地， 去中心化自治组织是通过一套具有先验约束力且正式透明的规则治理的。无论是否有第三方的参与，对应的智能合约都可以通过一种自主的方式执行组织功能。
            </>
        ),
    },
    {
        title: "组织",
        imageUrl: "img/magic.svg",
        description: (
            <>
            一般而言，引导这种组织形式（DAO）的唯一方法就是使用能够执行智能合约的去中心化账本技术。此外，合约安排还通过提供国家强制等强硬的反击手段来保护各参与方免于违约。但是，与智能合约不同，它们可以对照业务验证规则对请求进行测试，但不去先验地限制合格行动的范围，从而杜绝（智能）合约违约。
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames("col col--4", styles.feature)}>
            {imgUrl && (
                <div className='text--center'>
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <header
                className={classnames("hero hero--primary", styles.heroBanner)}
            >
                <div className='container'>
                    <h1 className='hero__title'>{siteConfig.title}</h1>
                    <p className='hero__subtitle'>{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                "button button--outline button--secondary button--lg",
                                styles.getStarted
                            )}
                            to={useBaseUrl("docs/overview")}
                        >
                            开始
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className='container'>
                            <div className='row'>
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;

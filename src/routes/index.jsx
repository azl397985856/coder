import React from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Card, Icon, Table } from "antd-mobile";
import styles from "./index.less";

const listConfig = [
  {
    title: "活学活用",
    sub: "将编程运用到学习中"
  },
  {
    title: "所见即所得",
    sub: "激发孩子的学习兴趣"
  },
  {
    title: "和孩子共创",
    sub: "将孩子的idea向世界展示"
  }
];
const cardConfig = [{
  title: '夯实的课程体系',
  content: [
    '前置：打字基础',
    '基础：解决各种数学算法问题',
    '高级：开发图形界面小工具',
    '竞赛：持续的信息竞赛辅导'
  ]
}, {
  title: '卓越的核心团队',
  content: [
    '家教：200课时+／人',
    '博文：100篇+／人',
    '编码：5年+／人',
    '项目：10个+／人'
  ]
}
// , {

// }, {

// }
];
const columns = [
  { title: '名称', dataIndex: 'title', key: 'title', width: '1rem' },
  { title: '课时（45分／课时）', dataIndex: 'a', key: 'a', width: '1rem' },
  { title: '价格（元）', dataIndex: 'b', key: 'b', width: '1rem' },
  { title: '特点', dataIndex: 'c', key: 'c', width: '1rem' }
];

const data = [
  { title: '基础打字及信息技术', a: '10', b: '2500', c: '拼音打字和基本信息技术', key: '1' },
  { title: '高级打字及信息技术', a: '13', b: '3000', c: '基础课程增加五笔打字', key: '2' },
  { title: '编程基础课程', a: '25', b: '6500', c: '基础编程知识，解决各种数学问题', key: '3' },
  { title: '图形化程序开发', a: '25', b: '6500', c: '图形化小程序，为idea共创打下基础', key: '4' },
  { title: '信息竞赛(长期)', a: '10', b: '3000', c: '长期性的信息竞赛辅导', key: '5' }
];
function Index({ location }) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>培养会编程的下一代</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>一台电脑，一段历程，成就美好未来</li>
      </ul>
      <ul className={styles.achievement}>
        {listConfig.map((lc, i) =>
          <li key={i} className={styles["achievement" + i]}>
            <div className={styles["fig" + i]} />
            {lc.title}
            <br />
            {lc.sub}
          </li>
        )}
      </ul>
      <div className={styles.cardDiv}>
        <div className={styles.bottomLine}>特色介绍</div>
        {cardConfig.map((cc, i) =>
          <div className={styles.cards} key={i}>
            <div className={styles.cardTitle}>{cc.title}</div>
            <div className={styles.cardDetail}>{cc.content.map((ccc,i)=><div key={i} className={styles.leftFloat} >{ccc}</div>)}</div>
          </div>
        )}
        <div className={styles.bottomLine}>价格一览</div>
        <div className={styles.tableWrapper}>
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
        <ul className={styles.list}>
          <li>
            <a className={styles.blue} href="tel:15867164299">
              轻按，联系我们
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);

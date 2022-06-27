import { useAliveController } from 'umi'

import Tab from './Tab'
import styles from './index.less'

export default function KeepAliveTabs() {
  const { getCachingNodes } = useAliveController()
  const cachingNodes = getCachingNodes()

  // console.log(cachingNodes)

  return (
    <ul className={styles['alive-tabs']}>
      {cachingNodes.map((node, idx) => (
        <Tab key={idx} node={node} />
      ))}
    </ul>
  )
}

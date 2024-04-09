import styles from './my-test-comp.module.scss';

/* eslint-disable-next-line */
export interface MyTestCompProps {}

export function MyTestComp(props: MyTestCompProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyTestComp!</h1>
    </div>
  );
}

export default MyTestComp;

import { css } from "@emotion/react";
import { Dayjs } from "dayjs";
import { NextPage } from "next";

const NewsRow: NextPage<{ date: Dayjs; tag: string; title: string }> = ({
  date,
  tag,
  title,
}) => {
  return (
    <div css={styles.row}>
      <p css={styles.date}>{date.format("YYYY/MM/DD")}</p>
      <p css={styles.tag}>{tag}</p>
      <h4 css={styles.title}>{title}</h4>
    </div>
  );
};

const styles = {
  row: css`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    line-height: 1.5;
    border-bottom: 1px #555 solid;
    padding: 12px 0;
  `,
  date: css`
    color: #e60013;
  `,
  tag: css`
    border: 1px #fff solid;
    padding: 4px 16px;
  `,
  title: css`
    color: #fff;
  `,
};

export default NewsRow;

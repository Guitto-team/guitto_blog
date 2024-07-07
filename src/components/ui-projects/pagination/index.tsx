import Link from 'next/link';
import { Flex } from 'components/foundation/flex';
import styles from './index.module.scss'

export const Pagination = ({ maxPageNumber, currentPageNumber }) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;
  const pageNumbers = [];

  for (let i = 1; i <= maxPageNumber; i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justifyContent='j-center' gap='small'>
      {currentPageNumber !== 1 && (
        <Link href={`/blog/page/${prevPage}`} className={styles.link}>
          ＜
        </Link>
      )}

      {pageNumbers.map((pageNumber) => {
        const isActive = pageNumber === currentPageNumber;
        return (
          <Link
            key={pageNumber}
            href={`/blog/page/${pageNumber}`}
            className={`${styles.number} ${isActive ? styles.isActive : ''}`}
          >
            {pageNumber}
          </Link>
        );
      })}

      {currentPageNumber !== maxPageNumber && (
        <Link href={`/blog/page/${nextPage}`} className={styles.link}>
          ＞
        </Link>
      )}
    </Flex>
  );
};
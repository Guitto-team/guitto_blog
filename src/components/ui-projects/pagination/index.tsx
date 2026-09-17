import Link from 'next/link';
import { Flex } from 'components/foundation/flex';
import styles from './index.module.scss'

export const Pagination = ({ maxPageNumber, currentPageNumber }) => {
  const currentPage = Number(currentPageNumber);
  const maxPage = Number(maxPageNumber);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const pageNumbers = [];

  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justifyContent='j-center' gap='small'>
      {currentPage !== 1 && (
        <Link href={`/blog/page/${prevPage}`} className={styles.link}>
          ＜
        </Link>
      )}

      {pageNumbers.map((pageNumber) => {
        const isActive = pageNumber === currentPage;
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

      {currentPage !== maxPage && (
        <Link href={`/blog/page/${nextPage}`} className={styles.link}>
          ＞
        </Link>
      )}
    </Flex>
  );
};
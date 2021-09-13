/** @format */

import React from 'react';
import { useQuery } from '@apollo/client';
import Pagination from 'rc-pagination';
import './styles.scss';
import { Input, Button, Mission, Loader } from '../../Components';
import { FETCH_LAUNCHES_PAST } from '../../Queries';
import { searchFilter } from '../../Utils/searchFilter';

const Launches: React.FC = () => {
  const [total] = React.useState(50);
  const [searchParams, setSearchParmas] = React.useState('');
  const [offset, setOffset] = React.useState(0);

  const { data, loading } = useQuery(FETCH_LAUNCHES_PAST, {
    variables: { limit: 10, offset: offset },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchParmas(event.target.value);
  };

  const handleClear = () => {
    setSearchParmas('');
  };

  const filteredData = searchFilter(data, searchParams);

  const handleChangePagination = (current: number, pageSize: number) => {
    setOffset(current);
  };

  return (
    <div className="launches__wrapper">
      <div className="search__section">
        <div className="search__input">
          <Input
            name="search"
            id="search"
            placeholder="Search by mission name or by rocket name"
            inputType="text"
            onChange={handleChange}
            value={searchParams}
          />
        </div>
        <div className="search__button">
          <Button type="secondary" onClick={handleClear}>
            Clear
          </Button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="missions__wrapper">
            {filteredData?.map((launch: any, idx: number) => {
              return (
                <React.Fragment key={idx}>
                  <Mission launch={launch} />
                </React.Fragment>
              );
            })}
          </div>
        </>
      )}
      <div className="pagination__wrapper">
        <Pagination
          total={total}
          defaultCurrent={1}
          prevIcon={'<'}
          nextIcon={'>'}
          defaultPageSize={10}
          pageSize={10}
          onChange={handleChangePagination}
          style={{ display: 'flex' }}
        />
      </div>

      <div className="missions__count">
        Total: {searchParams === '' ? total : filteredData?.length}
      </div>
    </div>
  );
};
export default Launches;

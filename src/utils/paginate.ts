import _ from 'lodash';
export const paginate = (items:any, currentPage:any, perPage:any) => {
    const startIndex = (currentPage - 1) * perPage;
   
    return _(items)
        .slice(startIndex)
        .take(perPage)
        .value();
};

import { PaginationRequest } from "../dtos/requests/pagination.request";

const getPaginationProps = (request: PaginationRequest) => {
  const pagination = {
    skip: +request.page * +request.pageSize,
    take: request.pageSize,
    order: {
      [request.orderColumn]: request.orderDirection,
    },
  };

  return pagination;
};

export { getPaginationProps };

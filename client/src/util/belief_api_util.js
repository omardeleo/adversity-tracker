import $ from 'jquery';

export const createBelief = belief => (
  $.ajax({
    method: 'POST',
    url: `/api/v1/beliefs`,
    data: { belief }
  })
);
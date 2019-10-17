import $ from 'jquery';

export const createBelief = belief => (
  $.ajax({
    method: 'POST',
    url: `/api/v1/beliefs`,
    data: { belief }
  })
);

export const fetchBeliefs = () => (
  $.ajax({
    method: 'GET',
    url: `/api/v1/beliefs`
  })
);
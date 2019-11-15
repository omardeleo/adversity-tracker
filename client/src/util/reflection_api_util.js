import $ from 'jquery';

export const createReflection = belief => (
  $.ajax({
    method: 'POST',
    url: `/api/v1/beliefs`,
    data: { belief }
  })
);

export const fetchReflections = () => (
  $.ajax({
    method: 'GET',
    url: `/api/v1/beliefs`
  })
);
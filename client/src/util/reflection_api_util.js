import $ from 'jquery';

export const createReflection = reflection => (
  $.ajax({
    method: 'POST',
    url: `/api/v1/reflections`,
    data: { reflection }
  })
);

export const fetchReflections = () => (
  $.ajax({
    method: 'GET',
    url: `/api/v1/reflections`
  })
);
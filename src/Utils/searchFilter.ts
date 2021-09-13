export const searchFilter = (data:{launchesPast: []}, searchParams:string) => {
    return data?.launchesPast.filter((item: {mission_name: string, rocket: {rocket_name:string}}) => {
    return item.mission_name.toLowerCase().indexOf(searchParams.toLowerCase()) !== -1 || item.rocket.rocket_name.toLowerCase().indexOf(searchParams.toLowerCase()) !== -1
  });
  }

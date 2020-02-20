export const getNameFromUser = (user: IUser): string => (user.isManager ? user.name : `${user.roomNumber} ${user.name}`)

export const useA = () => 'a'

const useB = () => 'b'

const useC = () => 'c'

export { useB, useC }

export default () => {
  return useState( 'd', () => 'd' )
}
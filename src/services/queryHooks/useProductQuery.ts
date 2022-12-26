import { productService } from "../productService"
import { useQuery } from "react-query"


export const useProductQuery = (teamId: number | undefined) => {
  const {isLoading, data, isSuccess} = useQuery('products',() => productService.getAllProducts(), {
    enabled: !!teamId,
    staleTime: 0,
    suspense: false,
    onError: (error: Error) => {
      console.log(error.message)
    }
  })

  return {isLoadingRoom: isLoading, teamDataQuery: data, isLoadingSuccess: isSuccess}
}
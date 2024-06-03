import { baseApi } from "../../api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/projectsCollection",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    createProject: builder.mutation({
      query: (projectsData) => ({
        url: "/projectsCollection",
        method: "POST",
        body: projectsData,
      }),
      invalidatesTags: ["projects"],
    }),
    updateProject: builder.mutation({
      query: (projectsData) => ({
        url: `/projectsCollection/${projectsData.id}`,
        method: "PUT",
        body: projectsData.updatedData,
      }),
      invalidatesTags: ["projects"],
    }),

    deleteProject: builder.mutation({
      query: (supplyId) => ({
        url: `/projectsCollection/${supplyId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetProjectsQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = projectApi;

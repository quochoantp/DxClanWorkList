<template>
  <CRow>
    <CCol :xs="12">
      <DocsCallout name="Table" href="components/table.html" />
    </CCol>

    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Công việc đơn vị</strong>
        </CCardHeader>
        <CCardBody>
          <CButton
            color="light"
            style="margin-left: 10px"
            @click="
              () => {
                visibleTable = true
                visibleList = false
                visibleTree = false
              }
            "
          >
            <CIcon icon="cilGrid"></CIcon> Dạng bảng
          </CButton>
          <CButton
            color="light"
            style="margin-left: 10px"
            @click="
              () => {
                visibleTable = false
                visibleList = false
                visibleTree = true
              }
            "
          >
            <CIcon icon="cibTreehouse"></CIcon> Dạng cây
          </CButton>
          <CButton
            color="light"
            style="margin-left: 10px"
            @click="
              () => {
                visibleTable = false
                visibleList = true
                visibleTree = false
              }
            "
          >
            <CIcon icon="cilList"></CIcon> Dạng danh sách
          </CButton>
          <CButton
            color="light"
            style="margin-left: 10px"
            @click="visibleFilter = !visibleFilter"
          >
            <CIcon icon="cilFilter"></CIcon> Lọc
          </CButton>

          <div style="float: right">
            <CButton style="margin-right: 10px" color="primary">
              <CIcon icon="cilPlus" style="margin-right: 8px"></CIcon>Thêm mới
            </CButton>
            <CButton style="margin-right: 20px" color="success">
              <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>Xuất báo
              cáo
            </CButton>
          </div>

          <div
            style="
              width: 100%;
              margin: 5px 5px 5px 5px;
              padding-right: 15px;
              border: 1px solid grey;
            "
          >
            <CForm
              v-show="visibleFilter"
              style="width: 100%; margin: 10px 10px 10px 10px"
            >
              <CRow>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Đơn vị:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="UIUX_08"
                /></CCol>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Vai trò đơn vị:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Vai trò đơn vị"
                  />
                </CCol>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Trạng thái:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Trạng thái"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Độ ưu tiên:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Độ ưu tiên"
                /></CCol>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Đặc tính:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Đặc tính"
                  />
                </CCol>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Tên công việc:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Tên công việc"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Người thực hiện:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Người thực hiện"
                /></CCol>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Người phê duyệt:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Người phê duyệt"
                  />
                </CCol>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Người thiết lập:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Người thiết lập"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Ngày bắt đầu:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Ngày bắt đầu"
                /></CCol>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1"
                    >Ngày kết thúc:</CFormLabel
                  >
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Ngày kết thúc"
                  />
                </CCol>
                <CCol xs style="width: 33.33%">
                  <CFormLabel for="exampleFormControlInput1">Tags:</CFormLabel>
                  <CFormInput
                    type="input"
                    id="exampleFormControlInput1"
                    placeholder="Tags"
                  />
                </CCol>
              </CRow>
              <div style="width: 100%">
                <CButton
                  style="
                    margin-left: 450px;
                    margin-top: 15px;
                    align-items: center;
                    justify-content: center;
                  "
                  color="success"
                >
                  <CIcon icon="cilFilter" style="margin-right: 8px"></CIcon>Tìm
                  kiếm
                </CButton>
              </div>
            </CForm>
          </div>

          <DocsExample href="components/table.html#striped-rows">
            <CModal
              :visible="visible1"
              @close="
                () => {
                  visible1 = false
                }
              "
            >
              <CModalHeader>
                <CModalTitle>Theo dõi công việc</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CRow>
                  <CCol xs style="width: 40%"> Tên công việc :</CCol>
                  <CCol xs style="width: 60%"> Theo dõi công việc </CCol>
                </CRow>
                <CRow>
                  <CCol xs style="width: 40%"> Đơn vị :</CCol>
                  <CCol xs style="width: 60%"> UIUX_08 </CCol>
                </CRow>
                <CRow>
                  <CCol xs style="width: 40%"> Độ ưu tiên :</CCol>
                  <CCol xs style="width: 60%"> Tiêu chuẩn </CCol>
                </CRow>
                <CRow>
                  <CCol xs style="width: 40%"> Người thực hiện :</CCol>
                  <CCol xs style="width: 60%"> Đồng Quốc Hoàn </CCol>
                </CRow>
                <CRow>
                  <CCol xs style="width: 40%"> Ngày bắt đầu :</CCol>
                  <CCol xs style="width: 60%"> 23/12/2021 </CCol>
                </CRow>
                <CRow>
                  <CCol xs style="width: 40%"> Ngày kết thúc :</CCol>
                  <CCol xs style="width: 60%"> 23/1/2022 </CCol>
                </CRow>
                <CRow>
                  <CCol xs style="width: 40%"> Trạng thái :</CCol>
                  <CCol xs style="width: 60%"> Đang thực hiện </CCol>
                </CRow>
                <CRow>
                  <CCol xs style="width: 40%"> Tiến độ :</CCol>
                  <CCol xs style="width: 60%"> 0% </CCol>
                </CRow>
                <CRow>
                  <CCol xs style="width: 40%"> Thời gian thực hiện :</CCol>
                  <CCol xs style="width: 60%"> 04:20:23 </CCol>
                </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton
                  color="secondary"
                  @click="
                    () => {
                      visible1 = false
                    }
                  "
                >
                  Close
                </CButton>
              </CModalFooter>
            </CModal>
            <div v-if="visibleTable">
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col"
                      ><input type="checkbox"
                    /></CTableHeaderCell>
                    <CTableHeaderCell scope="col"
                      >Tên công việc
                      <CIcon icon="cilFilter" style="margin-left: 8px"
                    /></CTableHeaderCell>
                    <CTableHeaderCell scope="col"
                      >Đơn vị <CIcon icon="cilFilter" style="margin-left: 8px"
                    /></CTableHeaderCell>
                    <CTableHeaderCell scope="col"
                      >Độ ưu tiên
                      <CIcon icon="cilFilter" style="margin-left: 8px"
                    /></CTableHeaderCell>
                    <!-- <CTableHeaderCell scope="col"
                    >Người thực hiện</CTableHeaderCell
                  >
                  <CTableHeaderCell scope="col">Ngày bắt đầu</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ngày kết thúc</CTableHeaderCell> -->
                    <CTableHeaderCell scope="col"
                      >Trạng thái
                      <CIcon icon="cilFilter" style="margin-left: 8px"
                    /></CTableHeaderCell>
                    <CTableHeaderCell scope="col"
                      >Tiến độ <CIcon icon="cilFilter" style="margin-left: 8px"
                    /></CTableHeaderCell>
                    <!-- <CTableHeaderCell scope="col"
                    >Thời gian thực hiện</CTableHeaderCell
                  > -->
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                    <CTableHeaderCell scope="col">Hành động</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row"
                      ><input type="checkbox"
                    /></CTableHeaderCell>
                    <CTableDataCell>Theo dõi công việc</CTableDataCell>
                    <CTableDataCell>UIUX_08</CTableDataCell>
                    <CTableDataCell
                      ><p style="color: green">Tiêu chuẩn</p></CTableDataCell
                    >
                    <CTableDataCell>Đang thực hiện</CTableDataCell>
                    <CTableDataCell
                      ><div class="progress">
                        <span
                          style="
                            position: absolute;
                            right: 1px;
                            font-size: 14px;
                            margin-right: 5px;
                            margin-top: 5px;
                          "
                          >0%</span
                        >
                      </div></CTableDataCell
                    >
                    <CTableDataCell
                      ><CButton
                        color="info"
                        @click="
                          () => {
                            visible1 = true
                          }
                        "
                      >
                        Chi tiết
                      </CButton>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CIcon icon="cilPencil" style="margin-left: 8px"></CIcon>
                      <CIcon icon="cilClock" style="margin-left: 8px"></CIcon>
                      <CIcon icon="cilPlus" style="margin-left: 8px"></CIcon>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"
                      ><input type="checkbox"
                    /></CTableHeaderCell>
                    <CTableDataCell
                      >Quản lý lượng công việc nhân viên</CTableDataCell
                    >
                    <CTableDataCell>UIUX_08</CTableDataCell>
                    <CTableDataCell
                      ><p style="color: green">Tiêu chuẩn</p></CTableDataCell
                    >
                    <CTableDataCell>Đang thực hiện</CTableDataCell>
                    <CTableDataCell
                      ><div class="progress">
                        <span
                          style="
                            position: absolute;
                            right: 1px;
                            font-size: 14px;
                            margin-right: 5px;
                            margin-top: 5px;
                          "
                          >40%</span
                        >
                        <div class="progress-bar"></div></div
                    ></CTableDataCell>
                    <CTableDataCell
                      ><CButton color="info">
                        Chi tiết
                      </CButton></CTableDataCell
                    >
                    <CTableDataCell>
                      <CIcon icon="cilPencil" style="margin-left: 8px"></CIcon>
                      <CIcon icon="cilClock" style="margin-left: 8px"></CIcon>
                      <CIcon icon="cilPlus" style="margin-left: 8px"></CIcon>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"
                      ><input type="checkbox"
                    /></CTableHeaderCell>
                    <CTableDataCell>Giám sát công việc tháng 1</CTableDataCell>
                    <CTableDataCell>UIUX_08</CTableDataCell>
                    <CTableDataCell
                      ><p style="color: green">Tiêu chuẩn</p></CTableDataCell
                    >
                    <CTableDataCell>Đã hoàn thành</CTableDataCell>
                    <CTableDataCell
                      ><div class="progress">
                        <span
                          style="
                            position: absolute;
                            right: 1px;
                            font-size: 14px;
                            margin-right: 5px;
                            margin-top: 5px;
                          "
                          >100%</span
                        >
                        <div class="progress-bar1"></div></div
                    ></CTableDataCell>
                    <CTableDataCell
                      ><CButton color="info">
                        Chi tiết
                      </CButton></CTableDataCell
                    >
                    <CTableDataCell>
                      <CIcon icon="cilPencil" style="margin-left: 8px"></CIcon>
                      <CIcon icon="cilClock" style="margin-left: 8px"></CIcon>
                      <CIcon icon="cilPlus" style="margin-left: 8px"></CIcon>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <div class="pagination">
                <div class="number-page">
                  <CFormLabel>Số dòng/trang</CFormLabel>
                  <CFormSelect
                    size="sm"
                    style="margin-left: 5px"
                    aria-label="Default select example"
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">50</option>
                  </CFormSelect>
                </div>
                <CPagination aria-label="Page navigation example">
                  <CPaginationItem href="/#/task-template"
                    >Previous</CPaginationItem
                  >
                  <CPaginationItem href="/#/task-template">1</CPaginationItem>
                  <CPaginationItem href="/#/task-template">2</CPaginationItem>
                  <CPaginationItem href="/#/task-template">3</CPaginationItem>
                  <CPaginationItem href="/#/task-template"
                    >Next</CPaginationItem
                  >
                </CPagination>
              </div>
            </div>
            <div v-if="visibleTree">
              <li>Không có chủ đề</li>
              <li>
                <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>UT+FT
                Module Quản trị hệ thống
              </li>
              <li>
                <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>UT+FT
                Module Quản lý tài liệu
              </li>
              <li>
                <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>UT+FT
                Module Quản lý tài sản
              </li>
              <li>
                <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>UT+FT
                Module Quản lý nhân sự
              </li>
              <li>
                <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>UT+FT
                Module Quản lý sản xuất
              </li>
              <li>
                <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>UT+FT
                Module Quản lý kho
              </li>
              <li>
                <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>UT+FT
                Module Quản lý KPI
              </li>
              <li>
                <CIcon icon="cilFile" style="margin-right: 8px"></CIcon>UT+FT
                Module Quản lý bán hàng
              </li>
            </div>
            <div v-if="visibleList">
              <CRow>
                <CCol xs style="width: 33.33%">
                  <div
                    style="width: 100%; border: 3px solid grey; display: block"
                  >
                    <div>
                      <strong style="margin-bottom: 10px"
                        >UT+FT Module quản trị hệ thống</strong
                      >
                    </div>
                    <div>Thời gian thực hiện công việc :</div>
                    <div>13-10-2021 08:00 AM - 31-01-2022 08:00 AM</div>
                    <div>
                      Độ ưu tiên công việc:<span style="color: green">
                        Tiêu chuẩn</span
                      >
                    </div>
                    <div>Tiến độ hiện tại : 40%</div>
                    <div>
                      Thành viên tham gia :
                      <li>Đồng Quốc Hoàn</li>
                      <li>Phạm Nam Anh</li>
                      <li>Nguyễn Bá Hoàng</li>
                    </div>
                  </div></CCol
                >
                <CCol xs style="width: 33.33%">
                  <div
                    style="width: 100%; border: 3px solid grey; display: block"
                  >
                    <div>
                      <strong style="margin-bottom: 10px"
                        >UT+FT Module quản lý nhân sự</strong
                      >
                    </div>
                    <div>Thời gian thực hiện công việc :</div>
                    <div>13-10-2021 08:00 AM - 31-01-2022 08:00 AM</div>
                    <div>
                      Độ ưu tiên công việc:<span style="color: green">
                        Tiêu chuẩn</span
                      >
                    </div>
                    <div>Tiến độ hiện tại : 40%</div>
                    <div>
                      Thành viên tham gia :
                      <li>Đồng Quốc Hoàn</li>
                      <li>Phạm Nam Anh</li>
                      <li>Nguyễn Bá Hoàng</li>
                    </div>
                  </div></CCol
                >
                <CCol xs style="width: 33.33%">
                  <div
                    style="width: 100%; border: 3px solid grey; display: block"
                  >
                    <div>
                      <strong style="margin-bottom: 10px"
                        >UT+FT Module quản lý KPI</strong
                      >
                    </div>
                    <div>Thời gian thực hiện công việc :</div>
                    <div>13-10-2021 08:00 AM - 31-01-2022 08:00 AM</div>
                    <div>
                      Độ ưu tiên công việc:<span style="color: green">
                        Tiêu chuẩn</span
                      >
                    </div>
                    <div>Tiến độ hiện tại : 40%</div>
                    <div>
                      Thành viên tham gia :
                      <li>Đồng Quốc Hoàn</li>
                      <li>Phạm Nam Anh</li>
                      <li>Nguyễn Bá Hoàng</li>
                    </div>
                  </div></CCol
                >
              </CRow>
            </div>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Tables',
  data() {
    return {
      visible1: false,
      visibleFilter: false,
      visibleTable: true,
      visibleList: false,
      visibleTree: false,
    }
  },
  setup() {
    document.title = 'Danh sách công việc cá nhân'
  },

  methods: {
    // dangbang() {
    //   this.visibleTable = true
    //   this.visibleList = false
    //   this.visibleTree = false
    // },
    // dangcay() {
    //   this.visibleTable = false
    //   this.visibleList = false
    //   this.visibleTree = true
    // },
    // dangdanhsach() {
    //   this.visibleTable = false
    //   this.visibleList = true
    //   this.visibleTree = false
    // },
  },
}
</script>

<style scoped>
.progress {
  background-color: rgb(221, 221, 221);
  text-align: right;
  border-radius: 3px;
  position: relative;
  width: 100px;
  height: 30px;
}
.progress-bar {
  width: 40%;
  max-width: 100%;
  min-width: 0%;
  background-color: red;
}
.progress-bar1 {
  width: 100%;
  max-width: 100%;
  min-width: 0%;
  background-color: rgb(57, 233, 34);
}
li:hover {
  background-color: lightgray;
  cursor: pointer;
}
.pagination {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  margin-top: 2em;
  align-items: center;
}
.number-page {
  display: flex;
  white-space: nowrap;
  align-items: center;
  margin-bottom: 0.8em;
}
</style>

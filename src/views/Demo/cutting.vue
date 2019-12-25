<template>
  <div class="about p-3">
    <h4 class="mb-3 clearfix">
      切割翻转
      <div class="float-right" style="margin-top: -4px;">
        <div class="mr-5 d-inline-block">
          <!-- <label class="mr-5">操作提示</label> -->
          <div class="custom-control custom-switch">
            <input type="checkbox" id="customSwitch1" class="custom-control-input">
            <label for="customSwitch1" class="custom-control-label text-normal">操作提示</label>
          </div>
        </div>

        <div class="btn btn-light error-trigger">
          异常信息
          <span class="badge badge-danger">0</span>
          <div class="error-wrapper">
            <p class="error-wrapper__title text-danger bg-light p-2"><i class="las la-exclamation-triangle"></i> 异常信息</p>
            <div class="error-wrapper__content">
              <p>切割机组设备参数设定错误切割机组设备参数设定错误切割机组设备参数设定错误</p>
              <p>切割机组设备参数设定错误切割机组设备参数设定错误切割机组设备参数设定错误</p>
            </div>
          </div>
        </div>
      </div>
    </h4>
    <div class="bg-white shadow p-3">
      <div class="clearfix mb-5">
        <span class="badge badge-pill badge-lg badge-success mr-2">在线</span>
        <span class="badge badge-pill badge-lg badge-light mr-2">手动</span>
        <span class="badge badge-pill badge-lg badge-light mr-2">待机</span>
        <div class="float-right">
          <div class="dropdown d-inline-block">
            <button class="btn btn-light dropdown-toggle mr-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              操作模式
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">自动</a>
              <a class="dropdown-item" href="#">手动</a>
              <a @click="openOverhaulDialog" class="dropdown-item" href="#">检修</a>
            </div>
          </div>
          <button @click="openDeviceSettingDialog" class="btn btn-light mr-2">设备参数</button>
          <button @click="openCraftSettingDialog" class="btn btn-light mr-2">工艺参数</button>
          <button class="btn btn-success mr-2">启动</button>
          <button class="btn btn-secondary mr-2">暂停</button>
        </div>
      </div>

      <div class="cutting-wrapper">
        <div class="cutting-box">
          <span class="singal-lamp active" title="粗侧刮" style="position: absolute; left: 98px; top: 150px;"></span>
          <span class="singal-lamp danger" title="细侧刮" style="position: absolute; left: 124px; top: 150px;"></span>
          <span class="singal-lamp active" title="1-1" style="position: absolute; left: 150px; top: 130px;"></span>
          <span class="singal-lamp active" title="2-1" style="position: absolute; left: 173px; top: 130px;"></span>
          <span class="singal-lamp active" title="3-1" style="position: absolute; left: 196px; top: 130px;"></span>
          <span class="singal-lamp active" title="4-1" style="position: absolute; left: 219px; top: 130px;"></span>
          <span class="singal-lamp danger" title="2-1" style="position: absolute; left: 150px; top: 180px;"></span>
          <span class="singal-lamp danger" title="2-2" style="position: absolute; left: 173px; top: 180px;"></span>
          <span class="singal-lamp danger" title="2-3" style="position: absolute; left: 196px; top: 180px;"></span>
          <span class="singal-lamp danger" title="2-4" style="position: absolute; left: 219px; top: 180px;"></span>

          <span class="singal-lamp active" title="1#刮皮" style="position: absolute; left: 550px; top: 80px;"></span>
          <span class="singal-lamp danger" title="升降上限" style="position: absolute; left: 578px; top: 100px;"></span>
          <span class="singal-lamp danger" title="升降原点" style="position: absolute; left: 578px; top: 150px;"></span>
          <span class="singal-lamp active" title="升降下限" style="position: absolute; left: 578px; top: 200px;"></span>

          <span class="singal-lamp danger" title="负压风机" style="position: absolute; left: 688px; top: 18px;"></span>
          <span class="singal-lamp active" title="摆框电机" style="position: absolute; left: 704px; top: 60px;"></span>

          <span class="singal-lamp active" title="2#刮皮" style="position: absolute; left: 835px; top: 80px;"></span>
          <span class="las la-arrow-up" style="position: absolute; left: 832px; top: 130px;"></span>
          <span class="las la-arrow-down" style="position: absolute; left: 832px; top: 160px;"></span>

          <span class="singal-lamp danger" title="吹气阀" style="position: absolute; left: 925px; top: 120px;"></span>

          <button class="btn btn-primary btn-sm" style="position: absolute; left: 625px; top: 0px;">吸顶</button>
          <button class="btn btn-primary btn-sm" style="position: absolute; left: 985px; top: 120px;">吹气</button>

          <span class="singal-lamp title" title="1#左限" style="position: absolute; left: 0px; bottom: 10px;"></span>
          <span class="singal-lamp title" title="1#原点" style="position: absolute; left: 65px; bottom: 10px;"></span>
          <span class="singal-lamp title" title="2#左限" style="position: absolute; left: 578px; bottom: 10px;"></span>
          <span class="singal-lamp title" title="1#右限" style="position: absolute; left: 825px; bottom: 10px;"></span>
          <span class="singal-lamp title" title="2#原点" style="position: absolute; left: 900px; bottom: 10px;"></span>
          <span class="singal-lamp title" title="2#右限" style="position: absolute; left: 965px; bottom: 10px;"></span>
        </div>

        <div class="towards-box">
          <div class="car-1 btn-group">
            <button class="btn btn-light btn-sm"><i class="las la-chevron-circle-left"></i></button>
            <button class="btn btn-light btn-sm"><i class="las la-chevron-circle-right"></i></button>
          </div>
          <div class="car-2 btn-group">
            <button class="btn btn-light btn-sm"><i class="las la-chevron-circle-left"></i></button>
            <button class="btn btn-light btn-sm"><i class="las la-chevron-circle-right"></i></button>
          </div>
        </div>
      </div>
    </div>

    <!-- 检修弹窗 -->
    <div class="modal fade" id="overhaulDialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title">切割机组检修调试</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- 左侧 -->
              <div class="col-sm-6">
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">粗侧刮刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">细侧刮刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp active mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">1-1槽刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">1-2槽刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp active mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">2-1槽刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp active mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">2-2槽刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">3-1槽刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">3-2槽刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp active mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">4-1槽刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp active mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">4-2槽刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
              </div>
              <!--右侧-->
              <div class="col-sm-6">
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">1#刮皮刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">2#刮皮刀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp active mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">吹气阀</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp active mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">摆框电机</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">升降电机</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">负压风机</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp active mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">1#小车</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
                <div class="flex-item mb-4">
                  <label class="flex-label mb-0 center px-3">2#小车</label>
                  <div class="flex-content px-3">
                    <span class="singal-lamp mr-5"></span>
                    <button class="btn btn-light mr-2">打开</button>
                    <button class="btn btn-light">关闭</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 切割机组设备参数设定 -->
    <div class="modal fade" id="deviceSettingDialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title">切割机组设备参数设定画面</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-6">
                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">吸顶风机运行时间：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">吹气阀运行时间：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#车横切速度：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#车纵切速度：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#车重车速度：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#车空车速度：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#车检修速度：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">2#车重车速度：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">2#车空车速度：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">2#车检修速度：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">吹气阀工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">升降上工作位位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">升降下工作位位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">升降零点位置预设：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入时间">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-sm-6">
                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">自动模式选择：</label>
                  <div class="flex-content px-2">
                    <select class="form-control">
                      <option value="1">单次自动</option>
                      <option value="1">循环自动</option>
                    </select>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#小车脱模工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#小车脱模安全位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#小车纵切工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">1#小车零点位置预设值：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">第1组槽刀工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">第2组槽刀工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">第3组槽刀工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">第4组槽刀工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">2#小车脱模工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">2#小车脱模安全位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">2#小车纵切工作位置：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-item mb-3">
                  <label class="flex-label px-2 center">2#小车零点位置预设值：</label>
                  <div class="flex-content px-2">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="请输入位置">
                      <div class="input-group-append">
                        <span class="input-group-text">S</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 切割机组工艺参数设定 -->
    <div class="modal fade" id="craftSettingDialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title">切割机组工艺参数设定</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="flex-item mb-3">
              <label class="flex-label px-2 center">板材长度：</label>
              <div class="flex-content px-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="请输入板材长度">
                  <div class="input-group-append">
                    <span class="input-group-text">mm</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-item mb-3">
              <label class="flex-label px-2 center">槽刀选择：</label>
              <div class="flex-content px-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="请选择槽刀">
                  <div class="input-group-append">
                    <span class="input-group-text">组</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-item mb-3">
              <label class="flex-label px-2 center">摆框运行频率：</label>
              <div class="flex-content px-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="请输入运行频率">
                  <div class="input-group-append">
                    <span class="input-group-text">Hz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Demo extends Vue {
  mounted () {
    console.log($)
    $('.error-trigger').on('click', () => {
      const e = window.event || arguments.callee.arguments[0]
      e.stopPropagation()
      $('.error-trigger .error-wrapper').css('display', 'block')
    })

    $('body').on('click', () => {
      $('.error-trigger .error-wrapper').css('display', 'none')
    })
  }

  openOverhaulDialog () {
    $('#overhaulDialog').modal('show')
  }

  openDeviceSettingDialog () {
    $('#deviceSettingDialog').modal('show')
  }

  openCraftSettingDialog () {
    $('#craftSettingDialog').modal('show')
  }
}
</script>
<style lang="less" scoped>
.cutting-wrapper {
  padding-bottom: 50px;
  overflow: auto;
  .cutting-box {
    // display: inline-block;
    margin: 0 auto;
    position: relative;
    width: 1000px;
    height: 334px;
    margin-bottom: 20px;
    background-image: url(../../assets/imgs/cutting.png);
    background-position: center;
    background-size: contain;
  }
  .towards-box {
    display: inline-block;
    margin: 0 auto;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    i {
      font-size: 1rem;
      margin: 0 1.5rem;
    }
  }
}

#overhaulDialog .flex-label {
  width: 100px;
  text-align: right;
}

#deviceSettingDialog .flex-label {
  width: 200px;
  text-align: right;
}

#deviceSettingDialog .flex-content input[type="text"] {
  width:100px;
}

#craftSettingDialog .flex-label {
  width: 130px;
  text-align: right;
}
</style>
